// TO DO:
//  - Get 'Download HTML' button working, consider making 'Download PDF' button
//    - Add a text input so users can name the file before downloading
//    - OR, just let the native download pop-up take care of it, that will give the user the option to rename anyways
//  - Consider adding a customizable css file that gets bundled into our html, add a tab to toolbar to edit this file
//  - Add a nicer editor, see list of possible editors below
//  - Make the pdf (and html download) auto update, 
//    - We want updatePdf to run user hasnt changed the input box for a few seconds
//    - See searchbar component of movie-tracker for an example
//  - Add a little question mark or an info icon, on hover display a dialog explaining what this website does and how to use it
//  - Make a select HTML button, on hover have a little drop down that shows the file selector,
//    - Then put a normal text input next to this new button, that will control the filename
//      - only need one title, just name one title.pdf and the other title.html
//
// Do we want to use NPM?  This depends on how the text editor needs to be installed
//    If we go pureJS: scripts are fetch via CDN, if you dont have internet you cant access the CDN
//    If we go npm: Packages should be minified and bundled into the website, should be useable offline
// - Once decided if we are going npm or vanilla JS, delete extra components like oldApp.jsx and counter.tsx

// Possible Editors:
// VIM: https://github.com/coolwanglu/vim.js or https://wang-lu.com/vim.js/asyncify/vim.html
// Another vim option: https://github.com/toplan/Vim.js
// VSCode-ish: https://ace.c9.io/
// VSCode: https://microsoft.github.io/monaco-editor/
//
// THIS IS JUST AWESOME: http://appsweets.net/wasavi/

async function updatePdf(content, renderOnce) {
  // const pdfData = await html2pdf().from("<h1 class='bg-blue-500'>NEW DATA</h1>", 'string').outputPdf('bloburi')
  // THE FIX, apparently if you run it twice, it'll just work
  // Why does this work? No body knows
  // Theory: The new tailwind classes dont get imported in time, but if you just run it again they will already been imported from the last run
  // This seems to hold true because classes that have already been called in the HTML are availble on the first run
  if (!renderOnce) {
    await html2pdf().from(content, 'string').outputPdf('bloburi');
  }
  // Update the pdf object container
  const pdfUrl = await html2pdf().from(content, 'string').outputPdf('bloburi');
  document.getElementById('pdfContainer').data = pdfUrl;
  document.getElementById('pdfDisplayError').href = pdfUrl; 

  // Create a new file with our new HTML content, and set <a> tag to download HTML file accordingly
  let htmlFile = new File([content], 'html-to-pdf.html', { type: 'text/html' })
  console.log(htmlFile);
  document.getElementById('htmlDownload').href = URL.createObjectURL(htmlFile);
  document.getElementById('htmlDownload').download = htmlFile.name;


  // These options dont seem to do anything
  // {
  //   margin:       1,
  //   filename:     'myfile.pdf',
  //   image:        { type: 'jpeg', quality: 0.98 },
  //   html2canvas:  { scale: 2 },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // })
}

// Set default pdf, i.e. create a blank document
updatePdf('', true);

// Add event listener for when html file gets uploaded
document.getElementById('htmlUpload').addEventListener('change', async () => {
  // Set a global variable called delay to setTimeout, in the root of the document
  // if delay exists, then clearTimeout and reset it
  const fileTextContent = await document.getElementById('htmlUpload').files[0].text()
  document.getElementById('htmlEditor').value = fileTextContent;

  updatePdf(fileTextContent);
})

// Update pdfContainer with new PDF generated from current htmlEditor value
document.getElementById('updatePdf').addEventListener('click', () => {
  updatePdf(document.getElementById('htmlEditor').value);
})


// DEPRECATED STUFF

// Use this to download: https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript
// Create html file and queue download
// document.getElementById('htmlDownload').addEventListener('click', () => {
//   console.log('Download textarea input as html file')
// 
// })

// USING WORKER FOR html2pdf()
// let worker = html2pdf()
// // LOOK AT THE prototype OF THIS VAR
// console.log(worker)
// console.log(worker.from('hell world', 'string').outputPdf().then(data => console.log('WORKER DATA',data)))

// Add event listener for when html file gets uploaded
// document.getElementById('htmlUpload').addEventListener('change', () => {
//   document.getElementById('htmlUpload').files[0].text().then(async fileTextContent => {
//     document.getElementById('htmlEditor').value = fileTextContent;
//     // const pdfData = await html2pdf().from("<h1 class='bg-red-600'>Hello World</h1>", 'string').outputPdf('bloburi')
//     // const pdfData = await html2pdf().from(parentDiv, 'element').outputPdf('bloburi')
// 
//     // THIS IS LITERALLY ALL WE NEED
//     console.log(document.getElementById('htmlEditor').value)
//     const pdfData = await html2pdf().from(document.getElementById('htmlEditor').value, 'string').outputPdf('bloburi')
//     // These options dont seem to do anything
//     // {
//     //   margin:       1,
//     //   filename:     'myfile.pdf',
//     //   image:        { type: 'jpeg', quality: 0.98 },
//     //   html2canvas:  { scale: 2 },
//     //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//     // })
//     console.log(pdfData)
//     document.getElementById('pdfContainer').data = pdfData;
//   })
// })

// // Add event listener for when pdf file gets uploaded
// let pdfUpload = document.getElementById('pdfUpload')
// pdfUpload.addEventListener('change', () => {
//   console.log('new file selected')
//   
//   console.log(document.getElementById('pdfUpload').files)
//   const test = URL.createObjectURL(document.getElementById('pdfUpload').files[0])
//   console.log(test)
//   document.getElementById('pdfContainer').data = test;
// })
// console.log(pdfUpload)

// function readHtmlFile() {
//   // let fileReader = new FileReader();
//   let testFile = new File(['PUT INPUT TEXT HERE this is a test of some more data'], 'someNewFilename.html', { type: 'text/html' })
//   testFile.text().then(data => console.log(data))
//   // console.log(fileReader.readAsText(testFile));
// }
// readHtmlFile()

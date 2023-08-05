// TO DO:
//  - Consider adding a customizable css file that gets bundled into our html, add a tab to toolbar to edit this file
//  - Add a nicer editor, see list of possible editors below
//    - If we get a nicer editor with vim mode working, allow user to set a default
//      - Use localstorage to load/preserve this value
//
//  - Get the filename input working OR just rely on the native downloader for renaming
//    - Should recognize uploaded file name
//    - Will be used to save both files, i.e. <FILENAME>.html and <FILENAME>.pdf
//  - Fill in the info dropdown with some useful text
//  - Get the pdf download button working
//    - If possible, remove logic that creates these files from updatePdf()
//      - This should slightly improve "performance" and is just in general better logic
//  - Simplify HTML, icons do not need to be nested, just put the classes on the containing divs
//  - Renaming: 
//    htmlUploadContainer -> uploadContainer
//    htmlUploadSelector -> uploadSelector
//    Replace all "" in the HTML file to ''
//
// Use this to download files: https://stackoverflow.com/questions/11620698/how-to-trigger-a-file-download-when-clicking-an-html-button-or-javascript
//
//
// Do we want to use NPM?  This depends on how the text editor needs to be installed
//    If we go pureJS: scripts are fetch via CDN, if you dont have internet you cant access the CDN
//    If we go npm: Packages should be minified and bundled into the website, should be useable offline
// - Once decided if we are going npm or vanilla JS, delete extra components like oldApp.jsx and counter.tsx
// - If we end up going with npm, we can give jsDoc a try

// Possible Editors:
// VIM: https://github.com/coolwanglu/vim.js or https://wang-lu.com/vim.js/asyncify/vim.html
// Another vim option: https://github.com/toplan/Vim.js
// VSCode-ish: https://ace.c9.io/
// VSCode: https://microsoft.github.io/monaco-editor/
// THE SOLUTION TO ALL: https://codemirror.net/examples/autocompletion/
//  - And this adds a vim mode: https://codemirror.net/5/demo/vim.html OR https://github.com/replit/codemirror-vim
//
// THIS IS JUST AWESOME: http://appsweets.net/wasavi/

// If we never use this function outside of updatePdf() then move it back inside updatePdf()
function updateHtml(content) {
  // use user defined filename here
  let htmlFile = new File([content], 'html-to-pdf.html', { type: 'text/html' })
  // console.log(htmlFile);
  document.getElementById('htmlDownload').href = URL.createObjectURL(htmlFile);
  document.getElementById('htmlDownload').download = htmlFile.name;
}

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

  updateHtml(content);

  // These options dont seem to do anything
  // {
  //   margin:       1,
  //   filename:     'myfile.pdf',
  //   image:        { type: 'jpeg', quality: 0.98 },
  //   html2canvas:  { scale: 2 },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // })
}

// When html file gets uploaded, set htmlEditor to its text content, and generate a pdf
document.getElementById('htmlUpload').addEventListener('change', async () => {
  const fileTextContent = await document.getElementById('htmlUpload').files[0].text()
  // update filename input here
  document.getElementById('htmlEditor').value = fileTextContent;

  updatePdf(fileTextContent);
})

// Automatically re-render PDF after user stops typing for a given amount of time
document.getElementById('htmlEditor').addEventListener('input', () => {
  if (delay) clearTimeout(delay);
  delay = setTimeout(() => {
    updatePdf(document.getElementById('htmlEditor').value);
  }, 2000)
})

document.getElementById('htmlUploadContainer').addEventListener('mouseenter', () => {
  document.getElementById('htmlUploadSelector').classList.remove('hidden');
  document.getElementById('uploadToggle').classList.add('bg-blue-600');
})
document.getElementById('htmlUploadContainer').addEventListener('mouseleave', () => {
  document.getElementById('htmlUploadSelector').classList.add('hidden');
  document.getElementById('uploadToggle').classList.remove('bg-blue-600');
})
document.getElementById('uploadToggle').addEventListener('click', () => {
  document.getElementById('htmlUploadSelector').classList.toggle('hidden');
  document.getElementById('uploadToggle').classList.toggle('bg-blue-600');
})

document.getElementById('downloadContainer').addEventListener('mouseenter', () => {
  document.getElementById('downloadSelector').classList.remove('hidden');
  document.getElementById('downloadToggle').classList.add('bg-blue-600')
})
document.getElementById('downloadContainer').addEventListener('mouseleave', () => {
  document.getElementById('downloadSelector').classList.add('hidden');
  document.getElementById('downloadToggle').classList.remove('bg-blue-600')
})
document.getElementById('downloadContainer').addEventListener('click', () => {
  document.getElementById('downloadSelector').classList.toggle('hidden');
  document.getElementById('downloadToggle').classList.toggle('bg-blue-600')
})

document.getElementById('infoContainer').addEventListener('mouseenter', () => {
  document.getElementById('infoSelector').classList.remove('hidden');
  document.getElementById('infoToggle').classList.add('bg-blue-600')
})
document.getElementById('infoContainer').addEventListener('mouseleave', () => {
  document.getElementById('infoSelector').classList.add('hidden');
  document.getElementById('infoToggle').classList.remove('bg-blue-600')
})
document.getElementById('infoContainer').addEventListener('click', () => {
  document.getElementById('infoSelector').classList.toggle('hidden');
  document.getElementById('infoToggle').classList.toggle('bg-blue-600')
})

// Make a special case checker for the above, makeDropDown(parent, toggle, dropdown)
// or makeDropDown(baseString, classAction, classValue)
// First just make a function that adds all three event listeners, only arg should be (baseString)
// Second, try to simplify the three event listeners will probs end up with something like:

let delay;
// Set default pdf, i.e. create a blank document
updatePdf('', true);



// DEPRECATED STUFF

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

import examplePdf from '../notes/dummy.pdf';
// This apparently just resolves to a URL, 
// although that URL could just point to something in the filesystem

// We want the user to able to upload their own html, so the text in the input has to be somehow messaged into an html file format
// Step 1: Create a file upload button
// Step 2: Get that pdf to display in the html object tag
// Yay we can display blobs as a pdf, hopefully we can find a pdf converter that will output something similar
// Step 4: the above functions should provide enough info to convert a string (the contents of our text input) to a file, 
//         with that we should be able to convert this data to a pdf file and display it to the user
// LAST STEP: Get a nicer text editor, maybe one that supports vim key bindings
//   - At the end of the day we're just reading a string, so the editor doesnt really matter

// TO DO:
// Styling only works with inline styles, try to get it working with tailwind classes
//   - Tailwind classes only work when the file is imported, if you change them after that it gets bricked, figure out why this is the case
//     - ACTUALLY, some tailwind classes work, others dont, maybe the tailwindCSS file is automatically being minimized?  Try importing straight from a CDN to get the entire tailwind library
//     Classes that actually work: bg-red-500, bg-red-600, bg-blue-500
//   - We need something like this: https://github.com/vadimdemedes/tailwind-rn
//   - Or maybe: https://devdojo.com/tnylea/extracting-tailwindcss-from-html
// Delete pdf upload button, we want users to be able to upload HTML file, download HTML file, and maybe download PDF file
// Do we want to use NPM?  This depends on how the text editor needs to be installed
//    If we go pureJS: scripts are fetch via CDN, if you dont have internet you cant access the CDN
//    If we go npm: Packages should be minified and bundled into the website, should be useable offline
// Consider adding a customizable css file that gets bundled into our html, add a tab to toolbar to edit this file
//

// If you include a class in the HTML, then the pdf output can actually use that class
// TAILWIND IS DEFINITLEY BEING MINIFIED, how can import all of them?
// Or just scan the input for classes and import those as needed
// OR maybe try setting this up in a project that is just raw HTML/CSS/JS, maybe astro is causing this weird issue

// Possible Editors:
// VIM: https://github.com/coolwanglu/vim.js or https://wang-lu.com/vim.js/asyncify/vim.html
// Another vim option: https://github.com/toplan/Vim.js
// VSCode-ish: https://ace.c9.io/
// VSCode: https://microsoft.github.io/monaco-editor/
//
// THIS IS JUST AWESOME: http://appsweets.net/wasavi/

// Add event listener for when html file gets uploaded
document.getElementById('htmlUpload').addEventListener('change', async () => {
  const fileTextContent = await document.getElementById('htmlUpload').files[0].text()
  document.getElementById('htmlEditor').value = fileTextContent;

  // document.getElementById('pdfContainer').data = await html2pdf().from(document.getElementById('htmlEditor').value, 'string').outputPdf('bloburi');
  document.getElementById('pdfContainer').data = await html2pdf().from(fileTextContent, 'string').outputPdf('bloburi');
  // These options dont seem to do anything
  // {
  //   margin:       1,
  //   filename:     'myfile.pdf',
  //   image:        { type: 'jpeg', quality: 0.98 },
  //   html2canvas:  { scale: 2 },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // })
})

// Update pdfContainer with new PDF generated from current htmlEditor value
document.getElementById('updatePdf').addEventListener('click', async () => {
  // const pdfData = await html2pdf().from("<h1 class='bg-blue-500'>NEW DATA</h1>", 'string').outputPdf('bloburi')
  // THE FIX, apparently if you run it twice, it'll just work
  // Why does this work? No body knows
  // Theory: The new tailwind classes dont get imported in time, but if you just run it again they will already been imported from the last run
  // This seems to hold true because classes that have already been called in the HTML are availble on the first run
  await html2pdf()
    .from(document.getElementById('htmlEditor').value, 'string')
    .outputPdf('bloburi')
  document.getElementById('pdfContainer').data = await html2pdf()
    .from(document.getElementById('htmlEditor').value, 'string')
    .outputPdf('bloburi');
})

console.log(examplePdf)
console.log('HELLO WORLD')



// DEPRECATED STUFF

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

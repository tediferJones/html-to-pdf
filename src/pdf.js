import examplePdf from '../notes/dummy.pdf';
// This apparently just resolves to a URL, 
// although that URL could just point to something in the filesystem

// PACKAGES FOR CONVERTING HTML TO PDF
// PREFERED: https://www.npmjs.com/package/html-to-pdf-js
// function addScript(url) {
//     var script = document.createElement('script');
//     script.type = 'application/javascript';
//     script.src = url;
//     document.head.appendChild(script);
// }
// addScript('https://raw.githack.com/eKoopmans/html2pdf/master/dist/html2pdf.bundle.js');

// console.log(html2pdf(document.body))

// Add event listener for when pdf file gets uploaded
let pdfUpload = document.getElementById('pdfUpload')
pdfUpload.addEventListener('change', () => {
  console.log('new file selected')
  
  console.log(document.getElementById('pdfUpload').files)
  const test = URL.createObjectURL(document.getElementById('pdfUpload').files[0])
  console.log(test)
  document.getElementById('pdfContainer').data = test;
})
// console.log(pdfUpload)

// Add event listener for when html file gets uploaded
document.getElementById('htmlUpload').addEventListener('change', () => {
  document.getElementById('htmlUpload').files[0].text().then(async fileTextContent => {
    // console.log(data)
    document.getElementById('htmlEditor').value = fileTextContent;
    // console.log(html2pdf(document.body).to('pdf'))
    // const worker = html2pdf().from('THIS IS A TEST STRING', 'string').to('pdf').then((data) => console.log(data))
    // console.log(worker);

    // console.log(await html2pdf().from('<h1>Hello World</h1>', 'string').outputPdf())

    const pdfData = await html2pdf().from('<h1>Hello World</h1>', 'string').outputPdf()
    // const pdfData = await html2pdf().from(document.body, 'element').outputPdf()
    // const pdfData = await html2pdf("hello world").outputImg('string', {
    //   margin:       1,
    //   filename:     'myfile.pdf',
    //   image:        { type: 'jpeg', quality: 0.98 },
    //   html2canvas:  { scale: 2 },
    //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    // })
    // const pdfData = await html2pdf().from('hell world', 'string').toPdf()
    // This works,
    // const testPdfData = await html2pdf().from('hell world', 'string').save()
    let worker = html2pdf()
    // LOOK AT THE prototype OF THIS VAR
    console.log(worker)
    // This should do the same as the above
    console.log(worker.from('hell world', 'string').outputPdf().then(data => console.log('WORKER DATA',data)))
    console.log(typeof(pdfData))
    console.log(pdfData)

    // console.log('testing')
    // console.log(await html2pdf().from('<h1>Hello World</h1>', 'string'))
    // console.log(await new html2pdf.Worker)
    // console.log(pdfData.split('\n'))
    // WE HAVE A STRING OF THE FILE, WRITE IT TO A FILE LIKE WE DO IN createHtmlFile, then make that file the new src of the pdfViewer


    
    // console.log("TextEncoder" in window)
    // const encoder = new TextEncoder();
    // const test = encoder.encode(pdfData)
    // console.log(test)

    // let newPdf = new File([pdfData], 'testPdf.pdf', { type: 'application/pdf' })
    let newPdf = new File(pdfData.split('\n'), 'testPdf.pdf', { type: 'application/pdf' })
    // let newPdf = new File(test, 'testPdf.pdf', { type: 'application/pdf' })
    console.log(newPdf)
    let newPdfUrl = URL.createObjectURL(newPdf);
    console.log(newPdfUrl)
    document.getElementById('pdfContainer').data = newPdfUrl;
  })
})

function createHtmlFile() {
  // You may need to convert strings to UTF-8, more info: https://developer.mozilla.org/en-US/docs/Web/API/File/File
  let testFile = new File(['PUT INPUT TEXT HERE'], 'someNewFilename.html', { type: 'text/html' })
  console.log(testFile)
}
// createHtmlFile()

function readHtmlFile() {
  // let fileReader = new FileReader();
  let testFile = new File(['PUT INPUT TEXT HERE this is a test of some more data'], 'someNewFilename.html', { type: 'text/html' })
  testFile.text().then(data => console.log(data))
  // console.log(fileReader.readAsText(testFile));
}
readHtmlFile()

// We want the user to able to upload their own html, so the text in the input has to be somehow messaged into an html file format
// Step 1: Create a file upload button
// Step 2: Get that pdf to display in the html object tag
// Yay we can display blobs as a pdf, hopefully we can find a pdf converter that will output something similar
// Step 4: the above functions should provide enough info to convert a string (the contents of our text input) to a file, 
//         with that we should be able to convert this data to a pdf file and display it to the user
// LAST STEP: Get a nicer text editor, maybe one that supports vim key bindings
//   - At the end of the day we're just reading a string, so the editor doesnt really matter

console.log(examplePdf)
console.log('HELLO WORLD')

// let pdfContainer = document.createElement('object');
// pdfContainer.data = examplePdf;
// pdfContainer.type = 'application/pdf';
// pdfContainer.classList = 'flex-1'
// 
// let pdfContainerError = document.createElement('div');
// 
// let errorMessage = document.createElement('p');
// errorMessage.innerHTML = 'Unable to display PDF file.'
// 
// let errorLink = document.createElement('a');
// errorLink.innerHTML = 'Click here to download';
// errorLink.href = examplePdf;
// 
// pdfContainerError.appendChild(errorMessage);
// pdfContainerError.appendChild(errorLink);
// pdfContainer.appendChild(pdfContainerError);
// 
// let container = document.getElementById('container');
// container.appendChild(pdfContainer)

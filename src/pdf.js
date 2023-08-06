// TO DO:
//  - Consider adding a customizable css file that gets bundled into our html, add a tab to toolbar to edit this file
//  - Add a nicer editor, see list of possible editors below
//    - If we get a nicer editor with vim mode working, allow user to set a default
//      - Use localstorage to load/preserve this value
//
//  - Fill in the info dropdown with some useful text
//  - Simplify HTML, icons do not need to be nested, just put the classes on the containing divs
//  - Add a better default state, put some example text in the htmlEditor, and 'html-to-pdf' in the filename
//    - Consider removing content var from updatePdf(), content will always be the text inside 'htmlEditor'
//      - May need to manually call updatePdf() in the 'htmlUpload' eventListener
//  - Renaming: 
//    Replace all "" in the HTML file to ''
//    Rename 'Selector' elements to ${baseString}DropDown, this just makes way more sense
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

async function updatePdf(content, renderOnce) {
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

  // These options dont seem to do anything
  // {
  //   margin:       1,
  //   filename:     'myfile.pdf',
  //   image:        { type: 'jpeg', quality: 0.98 },
  //   html2canvas:  { scale: 2 },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // })
};

// When html file gets uploaded, set htmlEditor to its text content, and generate a pdf
document.getElementById('htmlUpload').addEventListener('change', async () => {
  const fileTextContent = await document.getElementById('htmlUpload').files[0].text();
  document.getElementById('htmlEditor').value = fileTextContent;

  // remove '.html' and assign to filename input
  document.getElementById('filename').value = document.getElementById('htmlUpload').files[0].name.slice(0, -5);

  updatePdf(fileTextContent);
});

// Automatically re-render PDF after user stops typing for a given amount of time
document.getElementById('htmlEditor').addEventListener('input', () => {
  if (delay) clearTimeout(delay);
  delay = setTimeout(() => {
    updatePdf(document.getElementById('htmlEditor').value);
  }, 2000);
});

// Configure eventListeners for dropdowns
const casesV4 = {
  mouseenter: (baseString) => {
    document.getElementById(`${baseString}Selector`).classList.remove('hidden');
    document.getElementById(`${baseString}Toggle`).classList.add('bg-blue-600');
  },
  mouseleave: (baseString) => {
    document.getElementById(`${baseString}Selector`).classList.add('hidden');
    document.getElementById(`${baseString}Toggle`).classList.remove('bg-blue-600');
  },
  click: (baseString) => {
    document.getElementById(`${baseString}Selector`).classList.toggle('hidden');
    document.getElementById(`${baseString}Toggle`).classList.toggle('bg-blue-600');
    baseStrings.filter(item => item !== baseString).forEach(otherDropDown => {
      document.getElementById(`${otherDropDown}Selector`).classList.add('hidden');
      document.getElementById(`${otherDropDown}Toggle`).classList.remove('bg-blue-600');
    });
  },
};
const baseStrings = ['upload', 'download', 'info'];
baseStrings.forEach(baseString => {
  Object.keys(casesV4).forEach(event => {
    document.getElementById(`${baseString}Container`).addEventListener(event, () => {
      casesV4[event](baseString);
    });
  });
});

// Create download functions for each download button
['pdf', 'html'].forEach(type => {
  document.getElementById(`${type}Download`).addEventListener('click', () => {
    const fileUrl = {
      html: URL.createObjectURL(new File([document.getElementById('htmlEditor').value], 'temp', { type: 'text/html' })),
      pdf: document.getElementById('pdfContainer').data,
    }[type];

    if (fileUrl) {
      const triggerDownload = document.createElement('a');
      triggerDownload.href = fileUrl;
      triggerDownload.download = `${document.getElementById('filename').value}.${type}`;
      triggerDownload.click();
    };
  });
});

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

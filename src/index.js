// const html2pdf = require('html2pdf.js');
// import html2pdf from 'html2pdf.js';
//
// import test from './test';
// console.log(test)
// DONT USE A BUNDLER, it will only cause you problems
// Just use script tags, fuck the user, if their internet is shit they can go get fucked
// Delete esBuild and html2pdf(), and delete build scripts from package.json
// Delete dist folder, src is the new dist folder since we dont use bundling
// This is still better than use astro
//
// Is it still possible to break up this js file into smaller files?
// You could try importing files in the JS, and if that doesn't work try importing from the HTML
// 
// Can only import seperate files in the HTML, but all scripts can access the scope of all other scripts
// i.e. if we define a test var in test.js, it can be accessed by any script after test.js has been read

// TO DO:
//  - [ DONE ] Move this whole project from astro to a basic npm package, use esBuild for bundling
//    - [ DONE ] Theoretically, all we need is index.html, index.js, and package.json
//    - [ DONE ] Vite uses esBuild, vite is what nextJS uses, but vite also does a whole bunch of other random magic shit
//    - Still need to install esBuild and try to build to the current site
//  - Consider adding a customizable css file that gets bundled into our html, add a tab to toolbar to edit this file
//  - [ DONE ] Add a nicer editor, see list of possible editors below
//    - [ DONE ] If we get a nicer editor with vim mode working, allow user to set a default
//      - [ DONE ] Use localstorage to load/preserve this value
//  - Allow user to manually set the delay for updatePdf when user stops typing, 
//    - Also give user option to disable it entirely and allow them to click a button to update the pdf
//  - Move the filename input into the download dropdown, thats the only place it is relevant
//  - Create a 'settings' dropdown that will allow user to configure html2pdf() options,
//    - Should probably also move the 'VimMode' checkbox to this new 'settings' dropdown
//  - Figure out how to simplify the quick fix for html2pdf()
//    - Doesnt have to convert from string -> pdf, maybe just toContainer or toCanvas
//    - All Options: https://github.com/eKoopmans/html2pdf.js#worker-api
//  - Use a map instead of obj to create download links
//    - Then you dont have to define a variable and can just directly chain a forEach loop
//  - Move setupEditor, setupDropDowns, setupDownloads, to their own files
//    - move associated script tags to their associated file (i.e. add codeMirror scripts in codeMirror setup)
//    - This doesnt seem to work for some reason
//
//
//  - Renaming: 
//    Replace all "" in the HTML file to ''
//  - Consider using a map for special case handlers, it has a built in iterator, might be cleaner than Object.keys(var).forEach()
//
//
// Do we want to use NPM?  This depends on how the text editor needs to be installed
//    If we go pureJS: scripts are fetch via CDN, if you dont have internet you cant access the CDN
//    If we go npm: Packages should be minified and bundled into the website, should be useable offline
// - Once decided if we are going npm or vanilla JS, delete extra components like oldApp.jsx and counter.tsx
// - If we end up going with npm, we can give jsDoc a try

// THIS IS JUST AWESOME: http://appsweets.net/wasavi/

// async function updatePdf(renderOnce) {
//   const content = editor.getValue()
// 
//   // Why does this work? No body knows
//   // Theory: The new tailwind classes dont get imported in time, but if you just run it again they will already been imported from the last run
//   // This seems to hold true because classes that have already been called in the HTML are availble on the first run
//   if (!renderOnce) {
//     await html2pdf().from(content, 'string').outputPdf('bloburi');
//   }
//   // Update the pdf object container
//   // const pdfUrl = await html2pdf().from(content, 'string').outputPdf('bloburi');
//   // Default options can be found here: 
//   // https://github.com/eKoopmans/html2pdf.js#options
//   const pdfUrl = await html2pdf().set({
//     margin:       0.5,
//     image:        { type: 'jpeg', quality: 1 },
//     // Higher scale = higher quality
//     html2canvas:  { scale: 4 },
//     jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
//   }).from(content, 'string').outputPdf('bloburi');
//   document.getElementById('pdfContainer').data = pdfUrl;
//   document.getElementById('pdfDisplayError').href = pdfUrl; 
// };

// When html file gets uploaded, set htmlEditor to its text content, and generate a pdf
document.getElementById('htmlUpload').addEventListener('change', async () => {
  // Extract text content from file and assing to htmlEditor input
  // document.getElementById('htmlEditor').value = await document.getElementById('htmlUpload').files[0].text();
  editor.setValue(await document.getElementById('htmlUpload').files[0].text());
  // remove '.html' and assign to filename input
  document.getElementById('filename').value = document.getElementById('htmlUpload').files[0].name.slice(0, -5);
  updatePdf();
});

// Configure eventListeners for dropdowns
// const baseStrings = ['upload', 'download', 'info', 'settings'];
// third arg of forEach is the array being looped over, 
// thus we can call this loop directly without defining a variable
// baseStrings.forEach(baseString => {
// ['upload', 'download', 'info', 'settings'].forEach((baseString, index, baseStringArr) => {
//   const otherDropDowns = baseStringArr.filter(baseStringOption => baseStringOption !== baseString);
//   // codeMirror scroll bar has z-index = 6, and we want dropDown to display on top of codeMirror scrollbar 
//   // Alternatively just fetch the element with the highest index, and add 1 to that index to get desired zIndex for dropdowns
//   // console.log(document.getElementsByClassName('CodeMirror-vscrollbar')[0].style.zIndex)
//   console.log(document.getElementsByClassName('CodeMirror-vscrollbar'))
//   document.getElementById(`${baseString}Container`).style.zIndex = 7;
// 
//   document.getElementById(`${baseString}Container`).addEventListener('mouseenter', () => {
//     document.getElementById(`${baseString}DropDown`).classList.remove('hidden');
//     document.getElementById(`${baseString}Toggle`).classList.add('bg-blue-600');
//     // baseStrings.filter(item => item !== baseString).forEach(otherDropDown => {
//     otherDropDowns.forEach(otherDropDown => {
//       document.getElementById(`${otherDropDown}DropDown`).classList.add('hidden');
//       document.getElementById(`${otherDropDown}Toggle`).classList.remove('bg-blue-600');
//     });
//   });
// 
//   document.getElementById(`${baseString}Container`).addEventListener('mouseleave', () => {
//     document.getElementById(`${baseString}DropDown`).classList.add('hidden');
//     document.getElementById(`${baseString}Toggle`).classList.remove('bg-blue-600');
//   });
// 
//   document.getElementById(`${baseString}Toggle`).addEventListener('click', () => {
//     document.getElementById(`${baseString}DropDown`).classList.toggle('hidden');
//     document.getElementById(`${baseString}Toggle`).classList.toggle('bg-blue-600');
//     // baseStrings.filter(item => item !== baseString).forEach(otherDropDown => {
//     otherDropDowns.forEach(otherDropDown => {
//       document.getElementById(`${otherDropDown}DropDown`).classList.add('hidden');
//       document.getElementById(`${otherDropDown}Toggle`).classList.remove('bg-blue-600');
//     });
//   });
// });

// Create functions to download each filetype, and add tailwind script tag to HTML download
// const fileUrl = {
//   html: () => URL.createObjectURL(new File([
//     '<script src="https://cdn.tailwindcss.com"></script>' + editor.getValue()
//   ], 'temp', { type: 'text/html' })),
//   pdf: () => document.getElementById('pdfContainer').data,
// };
// Object.keys(fileUrl).forEach(fileType => {
//   document.getElementById(`${fileType}Download`).addEventListener('click', () => {
//     const triggerDownload = document.createElement('a');
//     triggerDownload.href = fileUrl[fileType]();
//     triggerDownload.download = `${document.getElementById('filename').value}.${fileType}`;
//     triggerDownload.click();
//   });
// });

// document.getElementById('vimMode').checked = localStorage.getItem('vimMode');
// document.getElementById('vimMode').addEventListener('change', () => {
//   if (localStorage.getItem('vimMode')) {
//     localStorage.removeItem('vimMode');
//     editor.setOption('keyMap', 'default')
//   } else {
//     localStorage.setItem('vimMode', true);
//     editor.setOption('keyMap', 'vim')
//   }
// })
// 
// // Set default state for htmlEditor and pdfContainer
// const editor = CodeMirror(document.getElementById('newEditor'), {
//   lineNumbers: true,
//   tabSize: 2,
//   mode: 'text/html',
//   extraKeys: {
//     "Tab": "autocomplete"  // Enable autocomplete with Ctrl+Space
//   },
//   hintOptions: {
//     hint: CodeMirror.hint.html,  // Use HTML-specific autocompletion
//     completeSingle: true
//   },
//   keyMap: (document.getElementById('vimMode').checked ? 'vim' : 'default'),
//   theme: 'ayu-dark',
//   autoCloseTags: true,
//   matchTags: {bothTags: true},
//   value: `<div class='m-4'>
//   <div class='bg-orange-500 text-gray-300 p-8 text-4xl flex justify-center'>
//     Hello World
//   </div>
//   <div class='m-4 bg-red-400 p-4 flex justify-between'>
//     <h1 class='flex items-center'>SOME NEW CONTENT</h1>
//     <a class='p-2 bg-blue-400' 
//       href='https://www.google.com'
//     >a link to google</a>
//   </div>
// </div>
// <!-- Press Tab for autocomplete -->`
// });
// // console.log('EDITOR', editor);
// // console.log(editor.showHint())
// document.getElementById('newEditor').children[0].style.height = '100%';
// // document.getElementById('newEditor').children[0].style.zIndex = 'auto';
// 
// // Delay updatePdf() until user stops typing
// let delay;
// editor.on('change', () => {
//   if (delay) clearTimeout(delay);
//   delay = setTimeout(() => {
//     updatePdf();
//   }, 2000);
// });
//
// let delay2;
// editor.on('change', (cm) => {
//   console.log('AUTOCOMPLETE')
// 
//   // editor.showHint()
//   // CodeMirror.showHint(cm, () => console.log('idkTest'), {
//   //   completeSingle: false, // Show suggestions on each key press
//   // });
//   if (delay2) clearTimeout(delay2);
//   delay2 = setTimeout(() => {
//     editor.showHint()
//   }, 200);
// })

updatePdf();

document.getElementById('html2pdfSettings').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('settings submit handler')
})

// function addTagToHead(tagType, attributes) {
//   // let newScript = document.createElement('script')
//   // newScript.src = src;
//   // if (crossOrigin) newScript.crossOrigin = crossOrigin;
//   // newScript.crossOrigin = crossOrigin
//   let newTag = document.createElement(tagType);
//   Object.keys(attributes).forEach(key => {
//     newTag[key] = attributes[key];
//   });
//   console.log(newTag)
// 
//   document.head.appendChild(newTag)
// }

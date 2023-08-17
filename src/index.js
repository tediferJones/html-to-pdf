
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
//    - Or just have use DOM calls to lookup current values of the form
//    - USE LOCAL STORAGE TO SAVE OPTIONS, that way users dont have to reset them everytime they visit
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
//  - Delete esBuild and html2pdf(), and delete build scripts from package.json
//  - Delete dist folder, src is the new dist folder since we dont use bundling
//  - Write some input validation in createPdf, html validation can be overridden
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

// When html file gets uploaded, set htmlEditor to its text content, and generate a pdf
document.getElementById('htmlUpload').addEventListener('change', async () => {
  // Extract text content from file and assing to htmlEditor input
  // document.getElementById('htmlEditor').value = await document.getElementById('htmlUpload').files[0].text();
  editor.setValue(await document.getElementById('htmlUpload').files[0].text());
  // remove '.html' and assign to filename input
  document.getElementById('filename').value = document.getElementById('htmlUpload').files[0].name.slice(0, -5);
  updatePdf();
});

updatePdf();
// document.getElementById('settingsToggle').click();

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

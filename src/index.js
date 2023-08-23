// TO DO:
//  - Consider adding a customizable css file that gets bundled into our html, add a tab to toolbar to edit this file
//  - Allow user to manually set the delay for updatePdf when user stops typing, 
//    - Also give user option to disable it entirely and allow them to click a button to update the pdf
//    - Or just have use DOM calls to lookup current values of the form
//    - USE LOCAL STORAGE TO SAVE OPTIONS, that way users dont have to reset them everytime they visit
//  - Figure out how to simplify the quick fix for html2pdf()
//    - Doesnt have to convert from string -> pdf, maybe just toContainer or toCanvas
//    - All Options: https://github.com/eKoopmans/html2pdf.js#worker-api
//  - Try to get a bundled version of this website working
//    - If we cant get a bundled version working then revert to pureJS
//      - Delete esBuild and html2pdf packages, and delete build scripts from package.json
//      - Delete dist folder, src is the dist folder if we dont use a bundler
//  - Try to setup files so that files import their related script tag 
//    - createPdf should append the script tags needed for that file to run/work, i.e. html2pdf
//  - Do we want user to be able to change the interval for auto-refresh?
//    - If we allow user to change it, we should also allow user to disable it, 
//      which means we need to conditionally render a button to manually update
//      - Thats kind of a lot of work for a feature no one is going to use
//
//
//  - Renaming: 
//    Replace all "" in the HTML file to ''
//
// Do we want to use NPM?
//    If we go pureJS: scripts are fetch via CDN, if you dont have internet you cant access the CDN
//    If we go npm: Packages should be minified and bundled into the website, should be useable offline
// - If we end up going with npm, we can give jsDoc a try

// THIS IS JUST AWESOME: http://appsweets.net/wasavi/

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

document.getElementById('autoRefresh').checked = false;

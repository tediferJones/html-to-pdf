document.getElementById('vimMode').checked = localStorage.getItem('vimMode');
document.getElementById('vimMode').addEventListener('change', () => {
  if (localStorage.getItem('vimMode')) {
    localStorage.removeItem('vimMode');
    editor.setOption('keyMap', 'default')
  } else {
    localStorage.setItem('vimMode', true);
    editor.setOption('keyMap', 'vim')
  }
})

// Set default state for htmlEditor and pdfContainer
const editor = CodeMirror(document.getElementById('newEditor'), {
  lineNumbers: true,
  tabSize: 2,
  mode: 'text/html',
  extraKeys: {
    "Tab": "autocomplete"  // Enable autocomplete with Ctrl+Space
  },
  hintOptions: {
    hint: CodeMirror.hint.html,  // Use HTML-specific autocompletion
    completeSingle: true
  },
  keyMap: (document.getElementById('vimMode').checked ? 'vim' : 'default'),
  theme: 'ayu-dark',
  autoCloseTags: true,
  matchTags: {bothTags: true},
  value: `<div class='m-4'>
  <div class='bg-orange-500 text-gray-300 p-8 text-4xl flex justify-center'>
    Hello World
  </div>
  <div class='m-4 bg-red-400 p-4 flex justify-between'>
    <h1 class='flex items-center'>SOME NEW CONTENT</h1>
    <a class='p-2 bg-blue-400' 
      href='https://www.google.com'
    >a link to google</a>
  </div>
</div>
<!-- Press Tab for autocomplete -->`
});
// console.log('EDITOR', editor);
// console.log(editor.showHint())
document.getElementById('newEditor').children[0].style.height = '100%';
// document.getElementById('newEditor').children[0].style.zIndex = 'auto';

// Delay updatePdf() until user stops typing
// let delay;
// editor.on('change', () => {
//   if (delay) clearTimeout(delay);
//   delay = setTimeout(() => {
//     updatePdf();
//   }, 1000);
// });

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

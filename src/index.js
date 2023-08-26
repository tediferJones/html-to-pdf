// TO DO:
//  - Figure out how to simplify the quick fix for html2pdf()
//    - Doesnt have to convert from string -> pdf, maybe just toContainer or toCanvas
//    - All Options: https://github.com/eKoopmans/html2pdf.js#worker-api
//  - [ NAH ] Consider adding a customizable css file that gets bundled into our html, add a tab to toolbar to edit this file
//  - [ DONE ] Try to get a bundled version of this website working
//    - [ DONE ] If we cant get a bundled version working then revert to pureJS
//      - [ DONE ] Delete esBuild and html2pdf packages, and delete build scripts from package.json
//      - [ DONE ] Delete dist folder, src is the dist folder if we dont use a bundler
//  - [ NAH ] Try to setup files so that files import their related script tag 
//    - [ NAH ] createPdf should append the script tags needed for that file to run/work, i.e. html2pdf
//  - [ NAH ] Do we want user to be able to change the interval for auto-refresh?
//    - [ NAH ] If we allow user to change it, we should also allow user to disable it, 
//      which means we need to conditionally render a button to manually update
//      - [ NAH ] Thats kind of a lot of work for a feature no one is going to use

// THIS IS JUST AWESOME: http://appsweets.net/wasavi/
// Setup Text Editor
const editor = CodeMirror(document.getElementById('newEditor'), {
  lineNumbers: true,
  tabSize: 2,
  mode: 'text/html',
  extraKeys: {
    "Tab": "autocomplete"  // Enable autocomplete with Tab
  },
  hintOptions: {
    hint: CodeMirror.hint.html,  // Use HTML-specific autocompletion
    completeSingle: true
  },
  keyMap: (localStorage.getItem('vimMode') ? 'vim' : 'default'), // Set vim mode based on localStorage value
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

// Toggle vim mode for editor
document.getElementById('vimMode').addEventListener('change', () => {
  if (localStorage.getItem('vimMode')) {
    localStorage.removeItem('vimMode');
    editor.setOption('keyMap', 'default')
  } else {
    localStorage.setItem('vimMode', true);
    editor.setOption('keyMap', 'vim')
  }
})

// Delay updatePdf() until user stops typing
let delay;
editor.on('change', () => {
  if (delay) clearTimeout(delay);
  delay = setTimeout(() => {
    updatePdf();
  }, 1000);
});

const defaultOptions = {
  margin: 1,
  image: { type: 'jpeg', quality: 1 },
  html2canvas: { scale: 4 },
  jsPDF: {
    unit: 'in',
    format: 'letter',
    orientation: 'portrait',
  },
}

async function updatePdf(renderOnce) {
  const content = editor.getValue();

  // Why does this work? No body knows
  // Theory: The new tailwind classes dont get imported in time, but if you just run it again they will already been imported from the last run
  // This seems to hold true because classes that have already been called in the HTML are availble on the first run
  if (!renderOnce) {
    await html2pdf().from(content, 'string').outputPdf('bloburi');
  }

  // Update the pdf object container
  const options = JSON.parse(localStorage.getItem('html2pdfOptions'))
  const pdfUrl = await html2pdf().set(options).from(content, 'string').outputPdf('bloburi');
  document.getElementById('pdfContainer').data = pdfUrl;
  document.getElementById('pdfDisplayError').href = pdfUrl; 
};

// set input values based on localStorage options
function setInputValues() {
  const setValue = {
    number: (option) => document.getElementById(option.id).value = option.value,
    select: (option) => {
      Array.from(document.getElementById(option.id).children).forEach(selector => {
        if (option.value === selector.value) {
          selector.selected = 'selected';
        };
      });
    },
  };

  const currentOptions = JSON.parse(localStorage.getItem('html2pdfOptions'));
  [ { id: 'margin', type: 'number', value: currentOptions.margin },
    { id: 'quality', type: 'number', value: currentOptions.image.quality },
    { id: 'scale', type: 'number', value: currentOptions.html2canvas.scale },
    { id: 'orientation', type: 'select', value: currentOptions.jsPDF.orientation },
    { id: 'units', type: 'select', value: currentOptions.jsPDF.unit },
    { id: 'format', type: 'select', value: currentOptions.jsPDF.format },
  ].forEach(option => {
      setValue[option.type](option);
    });
};

function init() {
  document.getElementById('vimMode').checked = localStorage.getItem('vimMode');
  document.getElementById('newEditor').children[0].style.height = '100%';

  // If there are no saved options, then save default options
  if (!localStorage.getItem('html2pdfOptions')) {
    localStorage.setItem('html2pdfOptions', JSON.stringify(defaultOptions));
  };
  
  setInputValues();
  updatePdf();
}
init();

// When options change, update PDF to use the current options (if the options are valid)
document.getElementById('html2pdfOptions').addEventListener('change', () => {
  if (document.getElementById('html2pdfOptions').reportValidity()) {
    const form = document.getElementById('html2pdfOptions');
    localStorage.setItem('html2pdfOptions', JSON.stringify({
      margin: Number(form.margin.value),
      image: { type: 'jpeg', quality: Number(form.quality.value) },
      html2canvas: { scale: Number(form.scale.value) },
      jsPDF: {
        unit: form.units.value,
        format: form.format.value,
        orientation: form.orientation.value,
      },
    }));

    // Running html2pdf() causes the menu to disappear, this will bring it back, although it is pretty janky
    updatePdf().then(() => {
      document.getElementById('settingsToggle').click();
    });
  };
});

// Reset user options to default
document.getElementById('resetHtml2pdfOptions').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('html2pdfOptions', JSON.stringify(defaultOptions));

  setInputValues();
  updatePdf();
});

// When html file gets uploaded, set htmlEditor to its text content, and generate a pdf
document.getElementById('htmlUpload').addEventListener('change', async () => {
  editor.setValue(await document.getElementById('htmlUpload').files[0].text());
  // remove '.html' and assign to filename input
  document.getElementById('filename').value = document.getElementById('htmlUpload').files[0].name.slice(0, -5);
  updatePdf();
});

// Setup eventListeners for Drop Downs
const highestZIndex = Number(window.getComputedStyle(document.getElementsByClassName('CodeMirror-vscrollbar')[0]).zIndex);

['upload', 'download', 'info', 'settings'].forEach((baseString, index, baseStringArr) => {
  const otherDropDowns = baseStringArr.filter(baseStringOption => baseStringOption !== baseString);
  document.getElementById(`${baseString}Container`).style.zIndex = highestZIndex + 1;

  document.getElementById(`${baseString}Container`).addEventListener('mouseenter', () => {
    document.getElementById(`${baseString}DropDown`).classList.remove('hidden');
    document.getElementById(`${baseString}Toggle`).classList.add('bg-blue-600');
    otherDropDowns.forEach(otherDropDown => {
      document.getElementById(`${otherDropDown}DropDown`).classList.add('hidden');
      document.getElementById(`${otherDropDown}Toggle`).classList.remove('bg-blue-600');
    });
  });

  document.getElementById(`${baseString}Container`).addEventListener('mouseleave', () => {
    document.getElementById(`${baseString}DropDown`).classList.add('hidden');
    document.getElementById(`${baseString}Toggle`).classList.remove('bg-blue-600');
  });

  document.getElementById(`${baseString}Toggle`).addEventListener('click', () => {
    document.getElementById(`${baseString}DropDown`).classList.toggle('hidden');
    document.getElementById(`${baseString}Toggle`).classList.toggle('bg-blue-600');
    otherDropDowns.forEach(otherDropDown => {
      document.getElementById(`${otherDropDown}DropDown`).classList.add('hidden');
      document.getElementById(`${otherDropDown}Toggle`).classList.remove('bg-blue-600');
    });
  });
});

// Setup download links
new Map(Object.entries({
  html: () => URL.createObjectURL(
    new File(
      ['<script src="https://cdn.tailwindcss.com"></script>' + editor.getValue()], 
      'tempFileName', 
      { type: 'text/html' }
    )
  ),
  pdf: () => document.getElementById('pdfContainer').data,
})).forEach((file, fileType) => {
    document.getElementById(`${fileType}Download`).addEventListener('click', () => {
      const triggerDownload = document.createElement('a');
      triggerDownload.href = file();
      triggerDownload.download = `${document.getElementById('filename').value}.${fileType}`;
      triggerDownload.click();
    })
  });

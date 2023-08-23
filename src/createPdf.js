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

// If this is user's first visit, set default options to localstorage
if (!localStorage.getItem('html2pdfOptions')) {
  localStorage.setItem('html2pdfOptions', JSON.stringify(defaultOptions));
};

async function updatePdf(renderOnce) {
  const content = editor.getValue()

  // Why does this work? No body knows
  // Theory: The new tailwind classes dont get imported in time, but if you just run it again they will already been imported from the last run
  // This seems to hold true because classes that have already been called in the HTML are availble on the first run
  if (!renderOnce) {
    await html2pdf().from(content, 'string').outputPdf('bloburi');
  }
  // Update the pdf object container
  // const pdfUrl = await html2pdf().from(content, 'string').outputPdf('bloburi');
  // Default options can be found here: 
  // https://github.com/eKoopmans/html2pdf.js#options

  const options = JSON.parse(localStorage.getItem('html2pdfOptions'))
  const pdfUrl = await html2pdf().set(options).from(content, 'string').outputPdf('bloburi');
  // const pdfUrl = await html2pdf().set({
  //   margin:       0.5,
  //   image:        { type: 'jpeg', quality: 1 },
  //   // Higher scale = higher quality
  //   html2canvas:  { scale: 4 },
  //   jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
  // }).from(content, 'string').outputPdf('bloburi');
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
          selector.selected = 'selected'
        };
      });
    },
  };

  const currentOptions = JSON.parse(localStorage.getItem('html2pdfOptions'));
  // elements
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
setInputValues();

document.getElementById('html2pdfOptions').addEventListener('change', () => {
  // On change, the drop down disappears, we want it to refresh and still show the dropDown
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

    // Running html2pdf() causes the menu to disappear
    updatePdf().then(() => {
      document.getElementById('settingsToggle').click();
    });
  };
});

// Reset user options to default
document.getElementById('resetHtml2pdfOptions').addEventListener('click', (e) => {
  e.preventDefault();
  localStorage.setItem('html2pdfOptions', JSON.stringify(defaultOptions));
  // Update inputs with default values
  setInputValues();
  updatePdf();
});



// When html file gets uploaded, set htmlEditor to its text content, and generate a pdf
document.getElementById('htmlUpload').addEventListener('change', async () => {
  // Extract text content from file and assing to htmlEditor input
  editor.setValue(await document.getElementById('htmlUpload').files[0].text());
  // remove '.html' and assign to filename input
  document.getElementById('filename').value = document.getElementById('htmlUpload').files[0].name.slice(0, -5);
  updatePdf();
});

updatePdf();

let delay;
editor.on('change', () => {
  if (delay) clearTimeout(delay);
  delay = setTimeout(() => {
    updatePdf();
  }, 1000);
});

function getSelectOpts(elementId) {
  return Array.from(document.getElementById(elementId).children).map(item => item.value);
}

function generateInputs() {
  // Consider moving this obj to the root of this script, consider how to implement default state and update state
  const options = {
    number: {
      // elementIds: ['margin', 'quality', 'scale'],
      inputs: {
        margin: { min: 0, max: 99, step: 0.01, },
        quality: { min: 0, max: 1, step: 0.01, },
        scale: { min: 1, max: 16, step: 0.01, },
      },
      validate: (elementId) => {
        const element = document.getElementById(elementId);
        return Number(element.value) >= Number(element.min) && Number(element.value) <= Number(element.max);
      },
      errorMsg: (elementId) => {
        const element = document.getElementById(elementId);
        console.log(element)
        return `${elementId} must be between ${element.min} and ${element.max}`;
      },
    },
    string: {
      inputs: {
        units: ['pt','mm','cm','in'],
        format: ['letter', 'government', 'legal', 'junior', 'ledger', 'tabloid'],
        orientation: ['portrait', 'landscape'],
      },
      test: (elementId) => getSelectOpts(elementId).includes(document.getElementById(elementId).value),
      error: (elementId) => `${elementId} must be one of the following: ${getSelectOpts(elementId)}`,
    },
  }
  // use this object to generate the form inputs, leave only the label tags in the HTML
}

function validateOpts() {
  // on change validate inputs, and assign result to localStorage
  // REMOVE HTML VALIDATORS IF WE GET THIS WORKING,
  // html validators only run on submit, these will run on every change
  const idkOpts = {
    number: {
      elementIds: ['margin', 'quality', 'scale'],
      test: (elementId) => {
        const element = document.getElementById(elementId);
        return Number(element.value) >= Number(element.min) && Number(element.value) <= Number(element.max);
      },
      error: (elementId) => {
        const element = document.getElementById(elementId);
        console.log(element)
        return `${elementId} must be between ${element.min} and ${element.max}`;
      },
    },
    string: {
      elementIds: ['units', 'format', 'orientation'],
      test: (elementId) => getSelectOpts(elementId).includes(document.getElementById(elementId).value),
      error: (elementId) => `${elementId} must be one of the following: ${getSelectOpts(elementId)}`,
    },
  };
  const errors = [];
  Object.keys(idkOpts).forEach(type => {
    idkOpts[type].elementIds.forEach(elementId => {
      if (!idkOpts[type].test(elementId)) {
        const newError = document.createElement('div');
        newError.textContent = idkOpts[type].error(elementId);
        errors.push(newError);
      }
    })
  })
  return errors;
};

document.getElementById('html2pdfOptions').addEventListener('change', () => {
  console.log('FORM HAS CHANGED')
  
  const errors = validateOpts();
  console.log(errors);
  if (errors.length) {
    // clear old error messages if they exist
    document.getElementById('validationErrors').innerHTML = '';
    errors.forEach(error => document.getElementById('validationErrors').appendChild(error));
  } else {
    // clear old error messages if they exist
    document.getElementById('validationErrors').innerHTML = '';
    // set opts to localStorage, and edit updatePdf() function use localStorage options OR the default set
    const test = document.getElementById('html2pdfOptions');
    localStorage.setItem('html2pdfOptions', JSON.stringify({
      margin: Number(test.margin.value),
      image: { type: 'jpeg', quality: Number(test.quality.value) },
      html2canvas: { scale: Number(test.scale.value) },
      jsPDF: {
        unit: test.units.value,
        format: test.format.value,
        orientation: test.orientation.value,
      },
    }))
    updatePdf();
  }
  // If values dont pass validation, then preserve previous options (i.e. dont save to localStorage)
  // document.getElementById('settingsToggle').click();
})

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

  // Get options from DOM before final render
  const test = document.getElementById('html2pdfOptions');
  // console.log(test.units.value);
  console.log('HTML2PDF OPTIONS')
  console.log(localStorage.getItem('html2pdfOptions'));
  // To restore default options, just delete html2pdfOptions
  const options = JSON.parse(localStorage.getItem('html2pdfOptions')) || {
    margin: 1,
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 4 },
    jsPDF: {
      unit: 'in',
      format: 'letter',
      orientation: 'portrait',
    },
  };
  console.log("THESE ARE THE FINAL OPTIONS")
  console.log(options)

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

function checkMinMax(val, min, max) {
  return val >= min && val <= max;
}

function checkUnion(val, arr) {
  return arr.includes(val);
}

function getSelectOpts(elementId) {
  return Array.from(document.getElementById(elementId).children).map(item => item.value);
}
// console.log(getSelectOpts('format'));

document.getElementById('html2pdfOptions').addEventListener('change', () => {
  console.log('FORM HAS CHANGED')
  // on change validate inputs, and assign result to localStorage
  // localStorage.setItem('html2pdfOptions', {})
  // test is either min/max or a string union
  // REMOVE HTML VALIDATORS IF WE GET THIS WORKING,
  // html validators only run on submit, these will run on every change

  // const validateOptions = {
  //   numbers: {
  //     margin: { min: 0, max: 10 },
  //     quality: { min: 0, max: 1 },
  //     scale: { min: 0, max: 99 },
  //   },
  //   string: {
  //     units: getSelectOpts('units'),
  //     format: getSelectOpts('format'),
  //     orientation: getSelectOpts('orientation'),
  //   },
  // };
  // const validationErrors = [];
  // Object.keys(validateOptions).forEach(type => {
  //   Object.keys(validateOptions[type]).forEach(option)
  //   if (option === 'number' && !checkMinMax(document.getElementById(option).value, validateOptions[type][option].min, validateOptions[type][option].max)) {
  //     validationErrors.push({ option, type })
  //   } else if (option === 'string' && !checkUnion(document.getElementById(option).value, validateOptions[type][option])) {
  //     validationErrors.push({ option, type })
  //   }
  // })
  // if (validationErrors.length) {
  //   validationErrors.forEach(error => {
  //     console.log(error);
  //     let newError = document.createElement('div');
  //     if (error.type === 'number') {
  //       newError.textContent = `${option} must be one of the following: ${validateOptions[type][option]}`;
  //     } else if (error.type === 'string') {
  //       newError.textContent = `${option} must be a number between ${validateOptions[type][option].min} and ${validateOptions[type][options]}`;
  //     }
  //     document.getElementById('validationErrors').appendChild(newError);
  //   })
  // }
  
  // If values dont pass validation, then preserve previous options (i.e. dont save to localStorage)
  updatePdf();
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
  console.log(test.units.value);
  const options = {
    margin: Number(test.margin.value),
    image: { type: 'jpeg', quality: Number(test.quality.value) },
    html2canvas: { scale: Number(test.scale.value) },
    jsPDF: {
      unit: test.units.value,
      format: test.format.value,
      orientation: test.orientation.value,
    }
  }

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

function getSelectOpts(elementId) {
  return Array.from(document.getElementById(elementId).children).map(item => item.value);
}

function addAttributes(element, attrs) {
  Object.keys(attrs).forEach(key => {
    key === 'class' ?  element.classList.add(attrs[key]) : element[key] = attrs[key];
  })
}

// USER CAN CHANGE EITHER, HTML OR JAVASCRIPT, so in all reality we might as well just stick with HTML validators
// We wanted to avoid the cases where a "savvy" user changes the HTML mins and maxs,
// BUT, Javascript files can be changed just as easily so whats the point?  Might as well just do the HTML validators and keep it simple

// How do we manage state between options changes?
// On start, if there is no value in localStorage, we use defaultOptions
// When the user changes the from the values are updated as the user changes them (obviously)
// SO THE ONLY OTHER TIME THE INPUTS WILL CHANGE IS WHEN THE USER RESETS TO DEFAULT
// SO EXPAND THE FUNCTION THAT RESETS TO DEFAULT WITH LOGIC THAT WILL UPDATE THE VALUES

// const defaultOptions = {
//   margin: 1,
//   image: { type: 'jpeg', quality: 1 },
//   html2canvas: { scale: 4 },
//   jsPDF: {
//     unit: 'in',
//     format: 'letter',
//     orientation: 'portrait',
//   },
// }
// // const userOptions = JSON.parse(localStorage.getItem('html2pdfOptions'));
// // console.log(userOptions);
// // console.log(localStorage.getItem('html2pdfOptions'))
// const realOptions = localStorage.getItem('html2pdfOptions') ? JSON.parse(localStorage.getItem('html2pdfOptions')) : defaultOptions;
// const options = {
//   number: {
//     inputs: {
//       margin: { min: 0, max: 99, step: 0.01, value: realOptions.margin },
//       quality: { min: 0, max: 1, step: 0.01, value: realOptions.image.quality },
//       scale: { min: 1, max: 16, step: 0.01, value: realOptions.html2canvas.scale },
//     },
//     validate: (elementId) => {
//       const element = document.getElementById(elementId);
//       return Number(element.value) >= Number(element.min) && Number(element.value) <= Number(element.max);
//     },
//     errorMsg: (elementId) => {
//       const element = document.getElementById(elementId);
//       // console.log(element)
//       return `${elementId} must be between ${element.min} and ${element.max}`;
//     },
//     createElement: (elementId) => {
//       const constraint = options.number.inputs[elementId];
//       const newInput = document.createElement('input');
//       newInput.classList.add('text-black')
//       newInput.type = 'number';
//       newInput.id = elementId;
//       addAttributes(newInput, constraint);
// 
//       document.getElementById(`${elementId}Label`).textContent = elementId[0].toUpperCase() + elementId.slice(1) + ': ';
//       document.getElementById(`${elementId}Label`).appendChild(newInput);
//     }
//   },
//   string: {
//     inputs: {
//       units: [
//         // How do we select the right default option?
//         { textContent: 'Point', value: 'pt' },
//         { textContent: 'Millimeter', value: 'mm' },
//         { textContent: 'Centimeter', value: 'cm' },
//         { textContent: 'Inch', value: 'in', selected: 'selected' },
//       ],
//       format: [
//         { textContent: 'Letter', value: 'letter', selected: 'selected' },
//         { textContent: 'Government', value: 'government' },
//         { textContent: 'Legal', value: 'legal' },
//         { textContent: 'Junior', value: 'junior' },
//         { textContent: 'Ledger', value: 'ledger' },
//         { textContent: 'Tabloid', value: 'tabloid' },
//       ],
//       orientation: [
//         { textContent: 'Portrait', value: 'portrait', selected: 'selected' },
//         { textContent: 'Landscape', value: 'landscape' },
//       ],
//     },
//     validate: (elementId) => getSelectOpts(elementId).includes(document.getElementById(elementId).value),
//     errorMsg: (elementId) => `${elementId} must be one of the following: ${getSelectOpts(elementId)}`,
//     createElement: (elementId) => {
//       const newSelector = document.createElement('select');
//       newSelector.id = elementId;
//       newSelector.classList.add('text-black');
//       options.string.inputs[elementId].forEach(constraint => {
//         const newOption = document.createElement('option')
//         addAttributes(newOption, constraint);
//         newSelector.appendChild(newOption);
//       });
// 
//       document.getElementById(`${elementId}Label`).textContent = elementId[0].toUpperCase() + elementId.slice(1) + ': ';
//       document.getElementById(`${elementId}Label`).appendChild(newSelector);
//     }
//   },
// }
// 
// function generateInputs() {
//   // Consider moving this obj to the root of this script, consider how to implement default state and update state
// 
//   // use this object to generate the form inputs, leave only the label tags in the HTML
//   Object.keys(options).forEach(type => {
//     Object.keys(options[type].inputs).forEach(option => {
//       options[type].createElement(option);
//     })
//   })
// }
// generateInputs();
// 
// function validateInputs() {
//   const errors = [];
//   Object.keys(options).forEach(type => {
//     Object.keys(options[type].inputs).forEach(option => {
//       // console.log(type, option)
//       if (!options[type].validate(option)) {
//         // options[type].errorMsg(option);
//         errors.push(options[type].errorMsg(option));
//       };
//     })
//   })
//   return errors;
// }
// 
// document.getElementById('html2pdfSettings').addEventListener('click', (e) => {
//   e.preventDefault();
//   localStorage.removeItem('html2pdfOptions');
//   // Object.keys(options).forEach(type => {
//   //   Object.keys(options[type].inputs).forEach(option => {
//   //     // const specialCase = {
//   //     //   margin: ()
//   //     // }[option];
//   //     // document.getElementById(option).value = defaultOptions.option.value
//   //   })
//   // })
// })
// 
// document.getElementById('html2pdfOptions').addEventListener('change', () => {
//   // const errors = validateOpts();
//   const errors = validateInputs();
//   console.log(errors);
//   document.getElementById('validationErrors').innerHTML = '';
//   if (errors.length) {
//     // clear old error messages if they exist
//     // document.getElementById('validationErrors').innerHTML = '';
//     // errors.forEach(error => document.getElementById('validationErrors').appendChild(error));
//     errors.forEach(error => {
//       const newError = document.createElement('div');
//       newError.textContent = error;
//       document.getElementById('validationErrors').appendChild(newError)
//     });
//   } else {
//     // clear old error messages if they exist
//     // document.getElementById('validationErrors').innerHTML = '';
//     // set opts to localStorage, and edit updatePdf() function use localStorage options OR the default set
//     const test = document.getElementById('html2pdfOptions');
//     localStorage.setItem('html2pdfOptions', JSON.stringify({
//       margin: Number(test.margin.value),
//       image: { type: 'jpeg', quality: Number(test.quality.value) },
//       html2canvas: { scale: Number(test.scale.value) },
//       jsPDF: {
//         unit: test.units.value,
//         format: test.format.value,
//         orientation: test.orientation.value,
//       },
//     }))
//     updatePdf();
//   }
//   // If values dont pass validation, then preserve previous options (i.e. dont save to localStorage)
//   // document.getElementById('settingsToggle').click();
// })

document.getElementById('html2pdfOptions').addEventListener('change', () => {
  // e.preventDefault();
  console.log('form inputs have changed')
  // document.getElementById('html2pdfOptions').submit()
  // console.log(document.getElementById('quality').reportValidity());

  // Error messages will be generated by HTML, no need to create your own
  // const errorMsgs = {
  //   number: {
  //     elementIds: ['margin', 'quality', 'scale'],
  //     errorMsg: (elementId) => {
  //       const element = document.getElementById(elementId);
  //       return `${elementId} must be between `
  //     } 
  //   }
  // }

  // let errors = false;
  // ['margin', 'quality', 'scale', 'orientation', 'units', 'format'].forEach(option => {
  //   const test = document.getElementById(option).reportValidity();
  //   console.log(option, test)
  //   if (!test) {
  //     // errors.push('ERROR MESSAGE')
  //     errors = true;
  //   }
  // });

  // const options = Array.from(document.getElementById('html2pdfOptions').children).filter(item => item.localName === 'label') // .filter(node);
  // // console.log(Array.from(options));
  // console.log(options)
  
  // const elementIds = ['margin', 'quality', 'scale', 'orientation', 'units', 'format'];
  // for (const option of elementIds) {
  //   if (!document.getElementById(option).reportValidity()) {
  //     console.log('BREAKING')
  //     break;
  //   }
  // }
  // console.log('after break statements');

  // document.getElementById('html2pdfOptions').reportValidity();
  // console.log(document.getElementById('html2pdfOptions').reportValidity());

  // document.getElementById('quality').reportValidity();
  // document.getElementById('scale').reportValidity();

  if (document.getElementById('html2pdfOptions').reportValidity()) {
    // Then append options to localStorage
    const test = document.getElementById('html2pdfOptions');
    // WRITE SOMETHING IN THE ROOT OF THIS DOC TO ASSIGN DEFAULT
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

  // We still need to figure out how to reset to default, and manage state between changes
  //  - For Example, when user resets to default settings we need to update all the input fields to their default value
  //  - Also need to be able to load previously defined user options, 
  //    so when user loads pages their specified options are set to the default value of each input
})

document.getElementById('submitHtml2pdfOptions').addEventListener('click', (e) => {
  e.preventDefault();
  console.log('submit options')
  localStorage.removeItem('html2pdfOptions')
  // Update inputs with default values
})
// document.getElementById('html2pdfSettings').addEventListener('submit', (e) => {
//   e.preventDefault();
//   console.log('triggered submit func')
// })
function setInputValues(options) {
  const cases = {
    margin: {
      setValue: (value) => document.getElementById('margin').value = value,
      fromOption: options.margin,
    },
  }
}

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
  // const test = document.getElementById('html2pdfOptions');
  // // console.log(test.units.value);
  // console.log('HTML2PDF OPTIONS')
  // console.log(localStorage.getItem('html2pdfOptions'));
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

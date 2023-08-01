import { useState } from 'react';
// import htmlPdfClient from 'html-pdf-client';
// import './App.css';
import { renderToStaticMarkup } from 'react-dom/server';
import { Document } from 'react-pdf';

// HTML TO PDF CONVERTER: https://www.npmjs.com/package/html-pdf-client#raw-js
// This depends on jsPDF: https://github.com/parallax/jsPDF
//   - Consider just using jsPDF, it is what html-pdf-client uses anyways

function App() {
  const html = (
    <div style={{ backgroundColor: 'red' }}>HELLO WORLD</div>
  )

  const [pdf, setPdf] = useState('')

  // THIS WILL DOWNLOAD THE CURRENT HTML AS A PDF
  // console.log(htmlPdfClient(renderToStaticMarkup(html)))

  // This also seems to work
  // console.log(htmlPdfClient(renderToStaticMarkup(html)).from().to('pdf'))

  // const test = new htmlPdfClient.Worker()
  // console.log(test.from(renderToStaticMarkup(html)).toPdf())

  // const test2 = renderToStaticMarkup();
  // console.log(test2.from(renderToStaticMarkup(html)).toPdf())



  // async function downloadPdf() {
  //   // var worker = new html2pdf.Worker // ();
  //   // const myWorker = await htmlPdfClient().from(html, 'string') // .outputPdf('html');
  //   // console.log(myWorker);
  //   
  //   console.log(await htmlPdfClient().from(renderToStaticMarkup(html)).outputPdf())
  //   console.log(typeof await htmlPdfClient().from(renderToStaticMarkup(html)).outputPdf())
  //   // setPdf(await htmlPdfClient().from(renderToStaticMarkup(html)).outputPdf())
  //   
  //   // htmlPdfClient(renderToStaticMarkup(html))
  //   // htmlPdfClient(renderToStaticMarkup(html).outputPdf())
  // }  
  // console.log("TextEncoder" in window)
  // const encoder = new TextEncoder();
  // const test = encoder.encode(htmlPdfClient().from(renderToStaticMarkup(html)).outputPdf())
  console.log(test)

  return (
    <div>
      {html}
      <button onClick={downloadPdf}>Click to download as PDF</button>
      <Document file={test} />
    </div>
  );
}

export default App;

import { useState } from 'react';
// import PdfViewer from 'pdf-react';
// import { SimplePdfViewerModule } from 'simple-pdf-viewer';
// import { Document } from 'react-pdf';
// import reactPdf from 'react-pdf';
// const { Document } = reactPdf;
// <Document file='https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf' />
// import htmlPdfClient from 'html-pdf-client';

export default function Counter() {
  const [state, setState] = useState(1);
  return (
    <div>
      <h1>Counter: {state}</h1>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => setState(state - 1)}>Dincrement</button>
    </div>
  )
}

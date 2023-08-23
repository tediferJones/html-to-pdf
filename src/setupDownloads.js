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

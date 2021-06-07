export const exportPDF = () => {
  const html2pdf = require('html2pdf.js/dist/html2pdf')
  const pagePDF = document.querySelector('.pagePDF')
  const btnExport = document.querySelector('.exportPDF')
  const optPDF = {
    margin: 0,
    filename: 'myCV.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: {
        dpi: 192,
        scale: 4,
        letterRendering: true,
        useCORS: true,
        scrollX: 0, scrollY: 0,
    },
  }

  btnExport.addEventListener('click', () => html2pdf().set(optPDF).from(pagePDF).save())
} 
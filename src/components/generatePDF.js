import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const generatePDF = (contentRef) => {
  html2canvas(contentRef.current).then((canvas) => {
    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF();
    pdf.addImage(imgData, 'PNG', 0, 0);
    pdf.save('download.pdf');
  });
};

export default generatePDF;

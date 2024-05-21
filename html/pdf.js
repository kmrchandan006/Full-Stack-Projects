 const { PDFDocument } = require('@pdf-lib/pdf-lib');
const fs = require('fs');

async function editPDF(inputPDFPath, outputPDFPath, newText) {
  const pdfBuffer = fs.readFileSync(inputPDFPath);
  const pdfDoc = await PDFDocument.load(pdfBuffer);

  const page = pdfDoc.getPages()[0];
  const { width, height } = page.getSize();
  const font = await pdfDoc.embedFont(PDFDocument.Font.Helvetica);

  const text = newText || 'Hello, PDF!';

  page.drawText(text, { x: 50, y: height - 200, font });

  const modifiedPDFBytes = await pdfDoc.save();

  fs.writeFileSync(outputPDFPath, modifiedPDFBytes);
}

// Example usage
editPDF('input.pdf', 'output.pdf', 'New Text');
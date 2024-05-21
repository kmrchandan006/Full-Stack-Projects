 const express = require('express');
const multer = require('multer');
const { PDFDocument } = require('pdf-lib');

const app = express();
const port = 3000;

app.use(express.static('public'));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/upload', upload.single('pdf'), async (req, res) => {
    try {
        const pdfBuffer = req.file.buffer;
        const pdfDoc = await PDFDocument.load(pdfBuffer);

        // Add your PDF editing logic here using pdf-lib
        // Example: pdfDoc.addPage();

        const editedPdfBuffer = await pdfDoc.save();

        // Respond with the modified PDF
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename=edited-pdf.pdf');
        res.send(editedPdfBuffer);
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
});

app.listen(port, () => {
    console.log(Server is running at http://localhost:${port});
});
const path = require('path')


const enterPrescription = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'lab', 'html', 'Prescription_login.html'));
}

const viewTests = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'lab', 'html', 'View_tests.html'));
}

const viewInvoice = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'lab', 'html', 'Invoice.html'));
}

module.exports = {
    enterPrescription,
    viewTests,
    viewInvoice
}
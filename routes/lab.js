const express = require('express')
const router = express.Router()

//controller  functions
const {
    enterPrescription,
    viewTests,
    viewInvoice
} = require("../controllers/lab")


//routes 
router.route('/').get(enterPrescription)
router.route('/prescriptions/view').get(viewTests)
router.route('/invoices/view').get(viewInvoice)


module.exports = router
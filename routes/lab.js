const express = require('express')
const router = express.Router()
const app = express()
app.use(express.json()); // To parse JSON bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies


//controller  functions
const {
    enterPrescription,
    viewTests,
    viewInvoice,
   inprogressssample,
   prescriptiondetail,
   totalcostbyid,
   insertinvoice,
   inpendingsample,
   incompeleteresult,
   inserttestresult,
   TestFieldsBySampleIDAndTestName,
   getinvoicedata,
   inprogressssamplebuttton
} = require("../controllers/lab")


//routes 
router.route('/').get(enterPrescription)
router.route('/prescriptions/view').get(viewTests)

router.route('/invoices/view').get(viewInvoice)

//backened route 
// get
router.route('/incompeleteresult').get(incompeleteresult)
router.route('/inpendingsample').get(inpendingsample)
router.route('/inprogressample').get(inprogressssample)
router.route('/prescription/:id').get(prescriptiondetail)
router.route('/cost/:id').get(totalcostbyid)
router.route('/testfieldsbysampleID/:sampleid/:testname').get(TestFieldsBySampleIDAndTestName)
router.route('/invoicedata/:id').get(getinvoicedata)

// post
router.route('/invoice/:id').post(insertinvoice)
router.route('/inserttestfield').post(inserttestresult)
router.route('/inprogressssamplebuttton/:sampleid/:testname').post(inprogressssamplebuttton)
// router.route('/inserttestresult/:sampleid/:fieldid/:value').post(inserttestresult)


module.exports = router
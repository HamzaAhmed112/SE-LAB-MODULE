const express = require('express')
const path = require('path')
const erms = require('./routes/emergency');
const lab = require('./routes/lab')

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.static('./public'));
app.use(express.json())


//router
app.use('/emergency', erms)
app.use('/lab', lab)


//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
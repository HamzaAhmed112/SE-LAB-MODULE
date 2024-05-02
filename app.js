const express = require('express')
const path = require('path')
const erms = require('./routes/emergency');

const app = express();
const PORT = process.env.PORT || 3000;

//middleware
app.use(express.static('./public'));
app.use(express.json())


//router
app.use('/emergency',erms)


//server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
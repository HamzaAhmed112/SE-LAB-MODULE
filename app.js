const express = require('express')
const path = require('path')
const erms = require('./routes/emergency');
const lab = require('./routes/lab')
const cors = require('cors')
const application = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require('body-parser');

application.use(cors());

require('dotenv').config({ path: '.env' });
//middleware
application.use(express.static('./public'));
application.use(express.json())
application.use(express.urlencoded({ extended: true }));
application.use(bodyParser.json());

//router
application.use('/emergency', erms)
application.use('/', lab)


//server
application.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

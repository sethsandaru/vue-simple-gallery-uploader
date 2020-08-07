const express = require('express')
const fileUpload = require('express-fileupload');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express()
const port = 3000

app.use(fileUpload({
    createParentPath: true
}));

//add other middleware
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use('/uploads', express.static(__dirname + '/../uploads'));

// routing...
require('./routes').createRoutes(app)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
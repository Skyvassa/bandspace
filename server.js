const express = require ('express');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));

app.listen (3000,(req,res) => {
    console.log("This Port is Working!")
})
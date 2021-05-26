const express = require ('express');
const app = express();
const methodOverride = require('method-override');
const bodyParser = require('body-parser');

app.use(express.static('public'));
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));

const routes = require('./routes');

app.use('/bands', routes.bands);

app.listen (3000,(req,res) => {
    console.log("This Port is Working!")
})
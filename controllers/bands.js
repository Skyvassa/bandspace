const Bands = require('../models/bands');

const index = (req, res) => {
    Bands.findAll().then(bands => {
        res.render('bands/index.ejs', { bands: bands});
    })
}
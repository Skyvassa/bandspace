const Bands = require('../models/bands');

const index = (req, res) => {
    Bands.findAll().then(bands => {
        res.render('bands/index.ejs', { bands: bands});
    })
}

const createBand = (req,res) => {
    Band.create(req,body).then(newUSer => {
        res.redirect(`/bands/profile/${newBand.id}`);
    })
}

const show = (req,res) => {
    for (i=0;i<bands.length;i++){
        if (bands[i].uuid === req.params.id){
            res.render('band/profile.ejs', {band:bands[i]});
        }
    }
}

module.exports = {
    index,
    createBand,
    show,
}
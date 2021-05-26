const Band = require('../models').Band;

const index = (req,res) => {
    res.render("bands/index.ejs");
}

const renderNew = (req,res) => {
    res.render("bands/signup.ejs", {error: ""});
}

const postBand = (req,res) => {
    Band.create(req,body).then(newBand => {
        res.redirect(`/bands/profile/${newBand.id}`);
    })
}

const show = (req,res) => {
    Band.findByPk(req.params.index).then(band => {
        res.render('bands/profile.ejs', { band: band});
    })
}

const deleteBand = (req,res) => {
    Band.destroy({ where: { id: req.params.index}}).then(() => {
        res.redirect('/bands');
    })
}

const showEdit = (req,res) => {
    Band.findByPk(req.params.index).then(band => {
        res.render('edit.ejs', {
            band: band,
            index: req.params.index,
        })
    })
}

const editBand = (req,res) => {
    Band.update(req.body, {
        where: { id: req.params.index },
        returning: true
    }).then(band => {
        res.redirect('/bands/profile/'+req.params.index);
    })
}

module.exports = {
    index,
    renderNew,
    postBand,
    show,
    deleteBand,
    showEdit,
    editBand,
}
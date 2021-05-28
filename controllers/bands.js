const Band = require('../models').Band;
const Post = require('../models').Post;

const index = (req,res) => {
    Band.findAll().then(band => {
        res.render("bands/index.ejs", {bands: band});
    })   
}

const renderNew = (req,res) => {
    res.render("bands/signup.ejs", {error: ""});
}

const postBand = (req,res) => {
    Band.create(req.body).then(newBand => {
        res.redirect(`/bands/profile/${newBand.id}`);
    })
}

const postPost = (req,res) => {
    Post.create(req.body).then(newPost => {
        res.redirect(`/bands/profile/${band.id}`);
    })
}

const show = (req,res) => {
    Band.findByPk(req.params.index, {
        include: [Post]
    }).then(band => {
        console.log(band);
        res.render('bands/profile.ejs', { band:band})
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
    postPost,
    show,
    deleteBand,
    showEdit,
    editBand,
}
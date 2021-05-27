const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.bands.index);
router.get('/signup', ctrl.bands.renderNew);
router.post('/', ctrl.bands.postBand);
router.delete('/profile/:index', ctrl.bands.deleteBand);
router.get('/profile/:index/edit', ctrl.bands.showEdit);
router.put('/profile/:index', ctrl.bands.editBand);
router.get('/profile/:index', ctrl.bands.show);

module.exports = router;
const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

router.get('/', ctrl.bands.index);
router.post('/signup', ctrl.bands.createBand);
router.get('/profile/:id', ctrl.bands.show);

module.exports = router;
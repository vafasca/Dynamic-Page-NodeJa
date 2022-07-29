const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Game = require('../models/game');

router.get('/', function (req, res, next) {
    res.render('../views/form.hbs');
});

module.exports = router;
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Game = require('../models/game');
const User = require('../models/player');


router.post('/', function (req, res, next) {
    const game = new Game({
        gamers: req.body.gamer,

    });
    game.save()
    .then(resut => res.json(game))
    .catch(err => res.json(err));

    var array = game.gamers;
    for (let index = 0; index < array.length; index++) {
        const gamers = new User({
            idGame: game._id.toString(),
            gamer: array[index]
        });
        gamers.save();
    }
});

module.exports = router;
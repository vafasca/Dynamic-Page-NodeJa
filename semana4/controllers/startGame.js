const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/player');
const State = require('../models/stateGame');

router.post('/', function (req, res, next) {
    User.aggregate(
        [
            { $match: { idGame: idForGame } }
        ]).exec((err, result) => {
            if (err) {
                res.send(err)
            }
            if (result) {
                var player1 = Math.floor(Math.random() * 7);
                var player2 = Math.floor(Math.random() * 7);
                var player3 = Math.floor(Math.random() * 7);
                if (player1 >= player2 & player1 >= player3) {
                    res.json(result[0]);
                    const apuesta = new State({
                        inProgress: false,
                        idWinner: result[0]._id.toString(),
                        idGame: idForGame,
                        name: result[0].gamer
                    });
                    apuesta.save();
                } else if (player2 >= player1 & player2 >= player3) {
                    res.json(result[1]);
                    const apuesta = new State({
                        inProgress: false,
                        idWinner: result[1]._id.toString(),
                        idGame: idForGame,
                        name: result[1].gamer
                    });
                    apuesta.save();
                } else if (player3 >= player1 & player3 >= player2) {
                    res.json(result[2]);
                    const apuesta = new State({
                        inProgress: false,
                        idWinner: result[2]._id.toString(),
                        idGame: idForGame,
                        name: result[2].gamer
                    });
                    apuesta.save();
                }
            }
        });
});

module.exports = router;
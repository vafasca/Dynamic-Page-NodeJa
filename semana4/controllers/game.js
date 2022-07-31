const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/player');
const State = require('../models/stateGame');

router.get('/:id', function (req, res, next) {
  var idForGame = req.params.id;
  State.find(
    
      { idGame: req.params.id }
    ).exec((err, teachers) => {
      if (err) {
        res.send(err)
      }
      if (teachers) {
        groups_promises = teachers.map(function(idGames){
          return User.find({idGame: req.params.id}).then((groups) => {
            console.log("Winner "+teachers);
            res.json({
              gamers: groups,
              Winners: teachers
            });
            return;
          });
        });
      }
    });
});

router.get('/:id/winner', function (req, res, next) {
  State.findOne({
    idGame: req.params.id
  }, function callback(error, a) { //me permite acceder a los valores de la coleccion ejem: a.name datos dentro de la coleccion
    res.json(a)
  })
});

module.exports = router;
const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/player');
const State = require('../models/stateGame');
var gamers_array = [];
var state_array = [];
var lastState;

router.get('/:id', function (req, res, next) {
  var idForGame = req.params.id;
  State.find(

    { idGame: req.params.id }
  ).exec((err, teachers) => {
    if (err) {
      return res.send(err)
    }
    if (teachers) {
      groups_promises = teachers.map(function(idForGame) {
        return User.find({ idGame: req.params.id }).then((groups) => {
          gamers_array = groups;
          state_array = teachers;
          lastState = state_array.length-1;
        });
      });
      return Promise.all(groups_promises).then(()=>{
        res.json({idGame: idForGame, gamers: gamers_array, winner: state_array[lastState]});
    });
    }
  });
});

router.get('/:id/winner', function (req, res, next) {
  State.findOne({
    idGame: req.params.id
  }, function callback(error, a) { //me permite acceder a los valores de la coleccion ejem: a.name datos dentro de la coleccion
    res.json(a)
  }).sort({ '_id': -1 })
});

module.exports = router;
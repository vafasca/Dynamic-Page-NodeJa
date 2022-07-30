const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/player');
const State = require('../models/stateGame');
var hola;
router.get('/:id', function (req, res, next) {
  idForGame = req.params.id;
  User.aggregate(
    [
      { $match: { idGame: req.params.id } }
    ]).exec((err, result) => {
      if (err) {
        res.send(err)
      }
      if (result) {
        res.json({
          idGame: req.params.id,
          gamer: result,
          inProgress: statusGamer,
          winner: { id: idWinner, name: nameGamer }
        });
      }
    });
    
});

router.get('/:id/winner', function (req, res, next) {
  // const data = State.find({idGame: req.params.id})
  // data
  // .then(result => res.json(result))
  // .catch(err => console.log(err));
   State.findOne({ 
    idGame: req.params.id
  }, function callback(error, a) {
    console.log(a.name);
    console.log(a.inProgress);
  })
});

module.exports = router;
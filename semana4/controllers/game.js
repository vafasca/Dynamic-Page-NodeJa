const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/player');
const State = require('../models/stateGame');
var gamers_array = [];
var status_array = [];
var lastStatus;

router.get('/:id', function (req, res, next) {
  var idSended = req.params.id;
  State.find(

    { idGame: req.params.id }
  ).exec((err, status) => {
    if (err) {
      return res.send(err)
    }
    if (status) {
      gamers_promises = status.map(function(idSended) {
        return User.find({ idGame: req.params.id }).then((gamers) => {
          gamers_array = gamers;
          status_array = status;
          lastStatus = status_array.length-1;
        });
      });
      return Promise.all(gamers_promises).then(()=>{
        res.json({idGame: idSended, gamers: gamers_array, winner: status_array[lastStatus]});
    });
    }
  });
});

router.get('/:id/winner', function (req, res, next) {
  State.findOne({
    idGame: req.params.id
  }, function callback(error, winner) { //me permite acceder a los valores de la coleccion ejem: a.name datos dentro de la coleccion
    res.json({id: winner.idWinner, name: winner.name})
  }).sort({ '_id': -1 })
});

module.exports = router;
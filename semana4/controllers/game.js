const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/player');
const State = require('../models/stateGame');
global.idForGame;
router.get('/:id', function (req, res, next) {
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

// router.get('/:id/winner', function (req, res, next) {
//   User.aggregate(
//     [
//       { $match: { idGame: req.params.id } }
//     ]).exec((err, result) => {
//       if (err) {
//         res.send(err)
//       }
//       if (result) {
//         if (player1 >= player2 & player1 >= player3) {
//           res.json(result[0]);
//           nameGamer = result[0].gamer;
//           idWinner = result[0]._id.toString();
//           status = false;
//           const apuesta = new State({
//             inProgress: false,
//             bet: 0,
//             idWinner: result[0]._id.toString(),
//             name: result[0].gamer
//           });
//           apuesta.save();
//         } else if (player2 >= player1 & player2 >= player3) {
//           res.json(result[1]);
//           nameGamer = result[1].gamer;
//           status = false;
//           idWinner = result[1]._id.toString();
//           const apuesta = new State({
//             inProgress: false,
//             bet: 0,
//             idWinner: result[1]._id.toString(),
//             name: result[1].gamer
//           });
//           apuesta.save();
//         } else if (player3 >= player1 & player3 >= player2) {
//           res.json(result[2]);
//           nameGamer = result[2].gamer;
//           status = false;
//           idWinner = result[2]._id.toString();
//           const apuesta = new State({
//             inProgress: false,
//             bet: 0,
//             idWinner: result[2]._id.toString(),
//             name: result[2].gamer
//           });
//           apuesta.save();
//         }
//       }

//     });
// });

module.exports = router;
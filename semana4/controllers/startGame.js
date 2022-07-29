const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/player');
const State = require('../models/stateGame');

router.get('/:id', function (req, res, next) {
    const data = State.find({
        $or:[
          {'deleted': { $eq:false}},
          {'deleted': { $exists: false}},
        ]
      });
      data
      .then(result => res.json(result))
      .catch(err => console.log(err));

});
  
  module.exports = router;
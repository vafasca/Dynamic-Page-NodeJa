const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const gameSchema = new Schema({
    gamers: {
        type: [{
            type: String,
            trim: true,
            required: [true, 'El nombre del familiar es requerido']
        }]
    }
}, { timestamp: true });

gameSchema.plugin(mongooseSoftDelete);

module.exports = Game = mongoose.model('Game', gameSchema);
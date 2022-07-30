const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const stateSchema = new Schema({
    inProgress: Boolean,
    bet: Number,
    idWinner: String,
    idGame: String,
    name: String
}, { timestamp: true });

stateSchema.plugin(mongooseSoftDelete);

module.exports = State = mongoose.model('State', stateSchema);
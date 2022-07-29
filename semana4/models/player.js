const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongooseSoftDelete = require('mongoose-delete');

const userSchema = new Schema({
    idGame: {
        type: String,
        trim: true
    },
    gamer: {
        type: String,
        trim: true
    }
}, { timestamp: true });

userSchema.plugin(mongooseSoftDelete);

module.exports = User = mongoose.model('User', userSchema);
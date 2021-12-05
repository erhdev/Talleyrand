const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let playerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    nation: {
        type: String,
        required: true
    },
    gameID: {
        type: Number
    },
)

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
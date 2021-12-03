const mongoose = require('mongoose');

const Schema = mongoose.Schema

const messageSchema = new Schema({
    sender: {type: Schema.Types.ObjectId, ref: 'Player', required: true},
    recipient: {type: Schema.Types.ObjectId, ref: 'Player', required: true},
    body: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
})

const Player = mongoose.model('Player', playerSchema);
module.exports = Player;
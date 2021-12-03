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
    // retrieves an array of documents by Id that are of the message schema
    commsWithAustria: [{type: Schema.Types.ObjectId, ref: 'Message'}]
}

)

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
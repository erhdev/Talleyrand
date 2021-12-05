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
    // retrieves an array of documents by ID that are of the message schema
    // I need a way to differentiate the different comm logs
    commsWithAustria: [{type: Schema.Types.ObjectId, ref: 'Message'}]
}

)

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;
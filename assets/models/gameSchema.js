const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    players:[{type: Schema.Types.ObjectId, ref: 'Player', required: true}],
    logBlock: {type: Schema.Types.ObjectId, ref 'LogBlock', required: true},
})

const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
const mongoose = require('mongoose');

const Schema = mongoose.Schema

const messageSchema = new Schema({
    sender: {type: Schema.Types.ObjectId, ref: 'Player', required: true},
    recipient: {type: Schema.Types.ObjectId, ref: 'Player', required: true},
    message: {type: String, required: true},
    timestamp: {type: Date, default: Date.now}
})

const Message = mongoose.model('Message', messageSchema);
module.exports = Message;
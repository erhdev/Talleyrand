const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = new Schema({
    players:[{type: Schema.Types.ObjectId, ref: 'Player', required: true}],
    logAusEng: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logAusFr: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logAusGer: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logAusIt: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logAusRus: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logAusTur: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logEngFr: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logEngGer: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logEngIt: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logEngRus: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logEngTur: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logFrGer: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logFrIt: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logFrRus: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logFrTur: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logGerIt: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logGerRus: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logGerTur: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logItRus: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logItTur: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logRusTur: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
    logGlobal: [{type: Schema.Types.ObjectId, ref: 'Message', required: true}],
})

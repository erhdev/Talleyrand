const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Player = require('../models/playerSchema');
const Message = require('../models/messageSchema');

// mongodb connection url
const dbURL = 'mongodb+srv://testUser:testtesttest@cluster0.jvkze.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true})
.then(console.log('connected to db'))
.catch(err => console.log(err));

const app = express();
app.use(express.json());

// gets a new
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
})

// creates a new player document based on the parameters of the incoming request
app.post('/players/:name.:nation', (req,res) => {
    console.log(req);
    var player = new Player ({
        name: req.params.name,
        nation: req.params.nation,
        gameID: 1,
    })
    player.save()
    .then((result) => {
        console.log(result.params);
    })
})
// returns list of players of gameID 1, will develop this to be modular in future
app.get('/players/gameID.:number', (req,res) => {
    // `${#}
    Player.find({'gameID': `${req.params.number}`}, 'name nation', function(err, players)
    {   
        res.json(players);
    })
})

let port = process.env.PORT || 1812

app.listen(port, () => console.log(`server listening on ${port}`))
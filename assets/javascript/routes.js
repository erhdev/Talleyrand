const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Player = require('../models/playerSchema');
const Message = require('../models/messageSchema');

// mongodb connection code
const dbURL = 'mongodb+srv://testUser:testtesttest@cluster0.jvkze.mongodb.net/Cluster0?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true})
.then(console.log('connected to db'))
.catch(err => console.log(err));

const app = express();
app.use(express.json());

// GET requests
// returns index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../index.html'));
})
// returns list of players of gameID 1, will develop this to be modular in future
app.get('/players/gameID.:number', (req,res) => {
    // `${#}
    Player.find({'gameID': `${req.params.number}`}, 'name nation', function(err, players)
    {   
        res.json(players);
    })
})

// POST requests
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
        // sends the document as a json object to the client so the id can be saved as a cookie
        res.json(result)
        console.log(result.params);
    })
})

// posts message
app.post('/message/:sender/:recipient/:message', (req,res) => {
    console.log(req)
    // creates new Message as variable using the req parameters
    var message = new Message ({
        sender: req.params.sender,
        recipient: req.params.recipient,
        message: req.params.message
    })

    // creates new Message document
    message.save()
    .then((result) => {
            // take the result's id and find the id of the sender and recipient, as established by the req params,
            // then append this message into the comm log of each
            // do I need a commLog middleman schema?
            // yes
            console.log(result)  
        }
    )
})



let port = process.env.PORT || 1812

app.listen(port, () => console.log(`server listening on ${port}`))
const Player = require('../models/playerSchema');
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
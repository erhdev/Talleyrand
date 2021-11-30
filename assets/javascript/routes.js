let express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.send('talleyrand HELLO WORLD');
})

app.post('/players/:id', (req,res) => {
    req.read();
})
let port = process.env.PORT || 1812
app.listen(port, () => console.log(`server listening on ${port}`))
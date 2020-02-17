const express = require('express')
const app = express()

const reading_digits = require('../app/reading_digits');
const wires = require('../app/wires');

// challenge 1
app.get('/api/lookandsay/:input', function (req, res) {
    let result = reading_digits.repeatedLookAndSay(req.params.input, req.query.times ? req.query.times : 1)
    res.send({next_string: result});
})

// challenge 2
app.post('/api/assembly/', function (req, res) {
    let solved_wires = wires.solveCircuit();
    if (req.query.wire){
        result = {};
        result[req.query.wire] = solved_wires[req.query.wire]
        res.send(result);
    } else {
        res.send({wires: solved_wires});
    }
})

app.listen(3000, function () {
    console.log('Started express on port 3000')
})
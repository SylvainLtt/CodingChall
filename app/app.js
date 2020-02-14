const express = require('express')
const app = express()

const reading_digits = require('../app/reading_digits');

app.get('/api/lookandsay/:input', function (req, res) {
    let result = reading_digits.repeatedLookAndSay(req.params.input, req.query.times ? req.query.times : 1)
    res.send({next_string: result});
})

app.listen(3000, function () {
    console.log('Started express on port 3000')
  })
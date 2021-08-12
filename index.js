const express = require('express')
const app = express()
const Check = require('./middleware/validation.js')

app.use (Check.check)


app.get('/', function (req, res) {
  res.send('hello, express')
})

  





app.listen(80)
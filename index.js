const express = require('express')
const app = express()
const Check = require('./middleware/validation.js')

const port = 80;
// app.use (Check.check)


app.get('/', Check.testCheck, function (req, res) {
  res.send('hello, express')
});

app.get('/profile', function(req, res){
  res.sendFile(`${__dirname}/source/3_Dota2-Kunkka1.jpg`)
  // res.send('hello, profile page')
  // console.log(__dirname);
});

app.listen(port, ()=> {
  console.log(`Listening on port: ${port} ...`);
})
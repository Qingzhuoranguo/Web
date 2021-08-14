const express = require('express')
const Check = require("./middlewares/validation.js")
const routes = require('./routers')

const app = express()
const port = 80;

app.use (Check.testCheck)


app.get('/', function (req, res) {
  res.send('hello, express')
});

routes(app)

app.listen(port, ()=> {
  console.log(`Listening on port: ${port} ...`);
})
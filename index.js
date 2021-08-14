const express = require('express')
const Check = require("./middlewares/validation")
const routers = require('./routers/gateway')

const app = express()
const port = 80;

app.set('views', __dirname + '/pages');
app.engine('html', require('ejs').renderFile)

// app.use (Check.sessionCheck)
routers(app)

app.listen(port, ()=> {
  console.log(`Listening on port: ${port} ...`);
})
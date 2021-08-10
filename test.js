const path = require('path')
const os = require("os")
const fs = require("fs");


// path
var pathObj = path.parse(__filename);
console.log(pathObj)

// os
var totalMemory = os.totalmem();
var freeMemory = os.freemem();
console.log ("Toal Memory: " + totalMemory);
console.log (`Total Memory: ${freeMemory}`);



// fs - file system
// sync version
const files0 = fs.readdirSync ('./') 
console.log (files0)


// assync version
fs.readdir ('./', (err, files)=>{
	if (err) console.log(`Error`, err);
	else console.log (files)
})


// Upper case indicate it is a class not a variable
const EventEmitter = require('events')
var emitter = new EventEmitter();


// Register a lisenter
emitter.on('messageLogged', (arg) =>{
	console.log(`listener called `, arg)
})
emitter.on('logEvent', (arg)=>{
	console.log(`listener`, arg)
})



// Raise an event 
emitter.emit('messageLogged', {id: 1, url: 'http://'})  // {something} -> event argument


// Raise: logging (data: message)
emitter.emit ('logEvent', {data: `123`})
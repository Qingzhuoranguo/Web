const http = require('http')
const fs = require('fs')
const port = 80

const server = http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type': 'text/html'})
    fs.readFile('pages/homepage.html',(err, data)=>{
        if (err){
            res.writeHead(404)
            res.write("error: file not found")
        }else{
            res.write(data)
        }
        res.end();
    })
});


server.listen(port, (err)=>{
    if (err) {
        console.log ("something went wrong", error)
    }else {
        console.log (`Server is litsening on port ${port}`)
    }
})
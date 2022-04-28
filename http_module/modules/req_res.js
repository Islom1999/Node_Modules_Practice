const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        fs.readFile(path.join(__dirname, 'html','index.html'), (err, content) => {
            if(err) throw err 
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(content)
        })
    }else if(req.url === '/about'){
        fs.readFile(path.join(__dirname, 'html','about.html'), (err, content) => {
            if(err) throw err 
            res.writeHead(200, {'content-type': 'text/html'})
            res.end(content)
        })
    }
    
})
const PORT = process.env.PORT || 3000
server.listen(PORT, ()=>{
    console.log(PORT)
})
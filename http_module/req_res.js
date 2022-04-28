const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req,res) => {
    if(req.url === '/' || req.url === '/index.html'){
        fs.readFile(path.join(__dirname, 'html','index.html'), (err, content) => {
            if(err) throw err 
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(content)
        })
        
    }else if(req.url === '/about' || req.url === '/about.html'){
        fs.readFile(path.join(__dirname, 'html','about.html'), (err, content) => {
            if(err) throw err 
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(content)
        })
    }else if(req.url === '/contact' || req.url === '/contact.html'){
        fs.readFile(path.join(__dirname, 'html','contact.html'), (err, content) => {
            if(err) throw err 
            res.writeHead(200,{'content-type': 'text/html'})
            res.end(content)
        })
    }
    console.log(req.url)
    
})
server.listen(3000, ()=>{
    console.log('3000')
})


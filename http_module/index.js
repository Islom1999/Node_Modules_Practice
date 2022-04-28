const http = require('http')

const server = http.createServer((req,res) => {
    if(req.url === '/'){
        const books = [
            {name: 'JS Asoslari', autor: 'Eshmat', pages: 150},
            {name: 'Ufq', autor: 'Said Ahmad', pages: 480},
            {name: 'Mukammal Dasturlash', autor: 'JAvlon Abdullo', pages: 283},
        ]
        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(books))
    }
})
const PORT = process.env.PORT || 3000
server.listen(PORT, ()=>{
    console.log(PORT) 
})
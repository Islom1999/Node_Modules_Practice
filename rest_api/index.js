const http = require('http')
const {v4} = require('uuid')
const getBodyData = require('./util')


let books = [
    {
        id: '1',
        title: 'Book n1',
        pages: 250,
        autor: 'Writter',
    }
]

const server = http.createServer(async (req,res) => {

    if(req.url === '/books' && req.method === "GET"){
        res.writeHead(200,{'Content-Type': 'application/json charset=utf8' })

        const resp = {
            status: 'ok',
            books,
        }

        res.end(JSON.stringify(resp))
    }
    else if (req.url === '/books' && req.method === "POST"){
        
        const data = await getBodyData(req)
        const {title, pages, author} = JSON.parse(data)
        const newBook = {
            id: v4(),
            title,
            pages, 
            author,
        }
        books.push(newBook)
        const resp = {
            status: "create",
            book: newBook
        }
        res.writeHead(200,{'Content-Type': 'application/json charset=utf8' })
        res.end(JSON.stringify(books))

    }else if(req.url.match(/\/books\/\w+/) && req.method === 'GET' ){
        const id = req.url.split('/')[2]
        console.log(id)
        const book = books.find(b => b.id === id)
        res.writeHead(200,{'Content-Type': 'application/json charset=utf8' })
        const resp = {
            status: 'ok',
            book: book,
        }
        res.end(JSON.stringify(resp))
    }else if(req.url.match(/\/books\/\w+/) && req.method === 'PUT' ){
        const id = req.url.split('/')[2]
        const idx = books.findIndex(b => b.id === id)

        const data = await getBodyData(req)
        const {title, pages, author} = JSON.parse(data)

        const changeBook = {
            id: books[idx].id,
            title: title || books[idx].title,
            pages: pages || books[idx].pages,
            author: author || books[idx].author,
        }
        books[idx] = changeBook

        res.writeHead(200,{'Content-Type': 'application/json charset=utf8' })
        const resp = {
            status: 'ok',
            book: changeBook,
        }
        res.end(JSON.stringify(resp))
    }else if(req.url.match(/\/books\/\w+/) && req.method === 'DELETE'){
        const id = req.url.split('/')[2]
        console.log(id)
        books = books.filter(b => b.id !== id)

        res.writeHead(200,{'Content-Type': 'application/json charset=utf8' })
        const resp = {
            status: 'DELETED'
        }
        res.write(JSON.stringify(books))
        res.end(JSON.stringify(resp)) 
    }
    
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => {
    console.log("server :" + PORT)
})
const fs = require('fs')
const path = require('path')
const { isTypedArray } = require('util/types')

// papka yaratish
fs.mkdir(path.join(__dirname, '/papka'), {}, err => {
    if(err) throw err
    console.log('papka yaratildi ...')
})

// file yaratish, va ichida yozish
fs.writeFile(path.join(__dirname, '/papka', 'text.txt'), 'Hello !!!', err => {
    if(err) throw err
    console.log('file yaratildi ...')
})

// file yaratish, va ichida yozish davomidan yozish
fs.appendFile(path.join(__dirname, '/papka', 'text.txt'), 'Hello !!!', err => {
    if(err) throw err
    console.log('file yaratildi ...')
})

// faylni oqish ichidagi textlarni qaytaradi
fs.readFile(path.join(__dirname,'papka', 'text.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})

// fayl nomini o'zgartirish
fs.rename(
    path.join(__dirname, 'papka', 'text.txt'), 
    path.join(__dirname, 'papka', 'example.txt'), 
    err => {
        if (err) throw err 
        console.log('nom ozgardi')
    }
    )
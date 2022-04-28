const path = require('path')

// file nomini qaytaradi
console.log(path.basename(__filename))

// fapka nomini qaytaradi(to'liq joyi)
console.log(path.dirname(__filename))

// faylni formatini qaytaradi 
console.log(path.extname(__filename))

// fayl holatini to'liq olib obyekt qilib beradi
const pathObj = path.parse(__filename)
console.log(pathObj)
console.log(pathObj.name)   

// biz bormoqchi bo'lgan filegacha bo'lgan yo'lni string qilib qaytaradi
console.log(path.join(__dirname, 'database', 'mongodb', 'db.js'))
// 'database/mongodb/db.js'






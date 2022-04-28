const url = require('url')

let newUrl = new URL('http://islom.uz:5000/users/user.html?name=Islom&status=active&age=24')


// umumiy url manzilni qaytaradi
console.log(newUrl.href)

// domain manzilni qaytaradi, port bilan birga
console.log(newUrl.host)

// domain manzilni qaytaradi
console.log(newUrl.hostname)

// domaindan keyin qaysi faylga murojat qililinganligini qaytaradi
console.log(newUrl.pathname)


// query parametrlarni qaytaradi
console.log(newUrl.search)


// query parametrlarni OBJ qilib qaytaradi
console.log(newUrl.searchParams)

// urlga qo'shimcha qo'shish mumkin
newUrl.searchParams.append('lastname', 'Karimov')
console.log(newUrl.href)
console.log(newUrl.searchParams)

// forEach
newUrl.searchParams.forEach((value,name) => {
    console.log(`${name} - ${value} `)
})


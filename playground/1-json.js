const fs = require('fs')
// const book = {
//     title: 'The Elegant Universe',
//     author: 'Brian Greene'
// }

// const bookJson = JSON.stringify(book)
// console.log(bookJson)
// fs.writeFileSync('1-json.json', bookJson)
// // const parsedData = JSON.parse(bookJson)
// // console.log(parsedData.author)

// const buffer = fs.readFileSync('1-json.json')
// const dataJSON = buffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)

const buffer = fs.readFileSync('1-json.json')
const data = JSON.parse(buffer.toString())

data.name = 'gurnameh'
data.age = '21'

const dataJSON = JSON.stringify(data)
fs.writeFileSync('1-json.json', dataJSON)

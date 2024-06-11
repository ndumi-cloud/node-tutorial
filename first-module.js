
const items = ['item1', 'item2']
const person = {
    name: 'bobo',
}

module.exports.items = items
module.exports.singlePerson = person


// code to be written in app. js

const data = require('./first-module')
console.log(data)
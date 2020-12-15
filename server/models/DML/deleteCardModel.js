const mongoose = require('mongoose')
const Book = require('../DDL/bookSchema')
const URL = 'mongodb://localhost:27017/'

exports.removeCard = id => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, {dbName: 'the_books'})
        .then(() => Book.findByIdAndRemove(id))
        .then(result => {
            resolve(result)
            mongoose.disconnect()
        })
        .catch(error => {
            reject(error)
            mongoose.disconnect()
        })
    })
}

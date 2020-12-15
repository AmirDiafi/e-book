const mongoose = require('mongoose')
const Book = require('../DDL/bookSchema')
const URL = 'mongodb://localhost:27017/'

exports.editCard = data => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, {dbName: 'the_books'})
        .then(() => Book.updateOne(
            {_id: data.id},
            {
                nameOfTheBook: data.nameOfTheBook,
                type: data.type,
                isExist: data.isExist,
                ref: data.ref,
                price: data.price
            }
        ))
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
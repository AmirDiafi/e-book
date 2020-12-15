const mongoose = require('mongoose')
const Book = require('../DDL/bookSchema')
const URL = 'mongodb://localhost:27017/'

// ** set the DML ** //
exports.getCards = () => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, {dbName: 'the_books'})
        .then(() => Book.find(
            {},{},
            {sort:{sortByDate: -1}})
        )
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

exports.getCard = id => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, {dbName: 'the_books'})
        .then(() => Book.findById(id))
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

exports.getCardByRef = ref => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, {dbName: 'the_books'})
        .then(() => Book.findOne({ref: ref}))
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

exports.getSection = type => {
    return new Promise((resolve, reject) => {
        mongoose.connect(URL, {dbName: 'the_books'})
        .then(() => Book.find({type: type}))
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
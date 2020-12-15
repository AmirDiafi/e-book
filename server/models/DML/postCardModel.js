const mongoose = require('mongoose')
const Book = require('../DDL/bookSchema')
const URL = 'mongodb://localhost:27017/'

exports.postCard = (data, result) => {
	return new Promise((resolve, reject) => {
		mongoose
			.connect(URL, { dbName: 'the_books' })
			.then(() => {
				const newBook = new Book({
					nameOfTheBook: data.nameOfTheBook,
					stars: data.stars,
					image: result.secure_url,
					cloudinary_id: result.public_id,
					type: data.type,
					dateStart: new Date().toDateString(),
					sortByDate: new Date(),
					isExist: data.isExist,
					ref: data.ref,
					price: data.price,
					desc: data.desc,
				})
				return newBook.save()
			})
			.then((newBook) => {
				resolve(newBook)
				mongoose.disconnect()
			})
			.catch((error) => {
				reject(error)
				mongoose.disconnect()
			})
	})
}

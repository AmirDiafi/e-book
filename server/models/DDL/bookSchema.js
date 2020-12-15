const mongoose = require('mongoose')

// *** set the DDL *** //
const bookSchema = mongoose.Schema({
    nameOfTheBook: String,
    stars: Number,
    image: String,
    dateStart: String,
    type: String,
    sortByDate: Number,
    isExist: Boolean,
    ref: Number,
    price: Number,
    desc: String,
    cloudinary_id: String
})

// ** mongoose configurations ** //
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

module.exports = mongoose.model('book', bookSchema)

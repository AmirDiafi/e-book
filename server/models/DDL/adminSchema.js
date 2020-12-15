const mongoose = require('mongoose')

const adminSchema = mongoose.Schema({
    adminname: String,
    password: String
})

// ** mongoose configurations ** //
mongoose.set('useUnifiedTopology', true)
mongoose.set('useNewUrlParser', true)
mongoose.set('useFindAndModify', false)

module.exports = mongoose.model('admin', adminSchema)

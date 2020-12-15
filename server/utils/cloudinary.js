const cloudinary = require('cloudinary').v2
cloudinary.config({
	cloud_name: 'e-book-1',
	api_key: '245964555954548',
	api_secret: '9yBYc3y1Sss610kmhUO_CaEoD1w',
})
module.exports = cloudinary

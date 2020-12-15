const postCardModel = require('../models/DML/postCardModel')
const cloudinary = require('../utils/cloudinary')

exports.postController = async (req, res) => {
	const result = await cloudinary.uploader.upload(req.file.path)
	console.log(result)
	postCardModel
		.postCard(req.body, result)
		.then(() => {
			console.log('data posted')
		})
		.catch((err) => console.log(err))
}

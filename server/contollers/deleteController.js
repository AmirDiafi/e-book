const deleteCardModel = require('../models/DML/deleteCardModel')
const cloudinary = require('../utils/cloudinary')

exports.removeCard = async (req, res) => {
    // Delete image from cloudinary cloud
    await cloudinary.uploader.destroy(req.body.cloudinary_id);
    deleteCardModel.removeCard(req.body.id)
    .then(() => {
        console.log('data deleted')
    })
    .catch(err => console.log(err))
}
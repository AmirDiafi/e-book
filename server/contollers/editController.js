const editCardModel = require('../models/DML/editCardModel')

exports.editCard = (req, res) => {
    editCardModel
    .editCard(req.body)
    .then(() => {
        console.log('data updated')
    })
    .catch(err => console.log(err))
}
const getCardsModel = require('../models/DML/getCardModel')

exports.getCards = (req, res) => {
    getCardsModel
    .getCards()
    .then(result => res.json(result))
    .catch(err => console.log(err))
}

exports.getCard = (req, res) => {
    getCardsModel
    .getCard(req.params.id)
    .then(result => res.json(result))
    .catch(err => console.log(err))
}

exports.getSection = (req, res) => {
    getCardsModel
    .getSection(req.params.id)
    .then(result => res.json(result))
    .catch(err => console.log(err))
}

exports.getCardByRef = (req, res) => {
    getCardsModel
    .getCardByRef(req.params.ref)
    .then(result => res.json(result))
    .catch(err => console.log(err))
}
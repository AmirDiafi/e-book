const router = require('express').Router()
const getController = require('../contollers/getController')

router.get(`/books/api`, getController.getCards)
router.get(`/books/card/:id`, getController.getCard)
router.get(`/books/sections/:id`, getController.getSection)
router.get(`/dashboard/reference/:ref`, getController.getCardByRef)

module.exports = router
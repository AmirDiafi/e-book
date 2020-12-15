const router = require('express').Router()
const editController = require('../contollers/editController')
const multer = require('multer')

router.post('/edit_book',
multer().single(), 
editController.editCard)

module.exports = router
const router = require('express').Router()
const deleteController = require('../contollers/deleteController')
const multer = require('multer')


router.post('/delete_book',
multer().single(),
deleteController.removeCard)

module.exports = router
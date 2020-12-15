const router = require('express').Router()
const postController = require('../contollers/postController')
const multer = require('../utils/multer')

router.post('/new_book', multer.single('image'), postController.postController)

module.exports = router

const router = require('express').Router()
const loginAdminController = require('../contollers/loginAdminController')

router.post('/login_admin',
loginAdminController.loginAdmin)

module.exports = router
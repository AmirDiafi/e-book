const loginAdminModel = require('../models/DML/loginAdminModel')

exports.loginAdmin = (req, res) => {
    loginAdminModel
    .loginAdminModel(req.body)
    .then(result => {
	    req.session.admin = result.adminname
        res.redirect('/dashboard')
    })
    .catch(err => {
        res.redirect('/login')
        console.log(err)
    })
}
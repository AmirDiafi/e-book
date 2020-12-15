exports.isAuth = (req, res, next) => {
    if(req.session.admin) next()
    else res.redirect('/login')
}

exports.isNotAuth = (req, res, next) => {
    if(!req.session.admin) next()
    else res.redirect('/')
}
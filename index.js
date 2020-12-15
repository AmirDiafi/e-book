const express = require('express')
const app = express()
const getCardsRouter = require('./server/routers/getCards')
const postCardsRouter = require('./server/routers/postCards')
const editCardsRouter = require('./server/routers/editCards')
const deleteCardsRouter = require('./server/routers/deleteCards')
const loginAdminRouter = require('./server/routers/loginAdmin')
const bodyParser = require('body-parser')
const path = require('path')
const dotenv = require('dotenv')
dotenv.config()

// ------ Call the session module ------ //
const session = require('express-session')
const sessionStore = require('connect-mongodb-session')(session)
const STORE = new sessionStore({uri: 'mongodb://localhost:27017/the_books',
    collection: 'session'
})

// ------ Start setup and use the session ------ //
app.use(session({
    secret: '9876tgJLkhljLJLo0866uLJKP54hgmkhfio',
    saveUninitialized: false,
    resave: false,
    store: STORE,
    cookie: {
        //maxAge: 5*12*365*24*60*60*1000 // Save the session for five years
	maxAge: 5*1000
    }
}))


app.use(express.static(path.join(__dirname, 'client', 'build')))
app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({extended: true}))
//app.use(bodyParser.json())
app.use(postCardsRouter)
app.use(getCardsRouter)
app.use(editCardsRouter)
app.use(deleteCardsRouter)
app.use(loginAdminRouter)

const protectRouter = require('./server/routers/protectRouter')
app.use('/dashboard', protectRouter.isAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.use('/login', protectRouter.isNotAuth, (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
})

const port = process.env.PORT || 5050
app.listen(port, () => {
    console.log('app now is listening on port: '+port)
})
const express = require('express')
const app = express()
const mysql = require('mysql2/promise')
const bodyParser = require('body-parser')
const session = require('express-session')
const account = require('./account')
const admin = require('./admin')


app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true}))
app.use(session({
    secret: 'testemdc',
    resave: true,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')

const init = async() => {
    const connection = await mysql.createConnection({

        host:'127.0.0.1',
        user:'root',
        password: 'root',
        database:'testeMdc'

     })

app.use((req, res, next) =>{
    if(req.session.user){
        res.locals.user = req.session.user
    }else{
        res.locals.user = false
    }
    next()
})

app.use(account(connection))
app.use('/admin', admin(connection))


app.listen( process.env.PORT || 3000, err => {
    console.log('Teste MDC server running..3000')
    })
 }

init()


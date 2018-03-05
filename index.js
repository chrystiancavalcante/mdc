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
    secret: 'softwarepro',
    resave: true,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')

const init = async() => {
    const connection = await mysql.createConnection({
        host:'gp96xszpzlqupw4k.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user:'nwvwc45j9nyly6hz',
        password: 'shafuhwgjw4g718v',
        database:'ldxl5hzxaum96zvi'

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


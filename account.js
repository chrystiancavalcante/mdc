const express = require ('express')
const app = express.Router()
<<<<<<< HEAD
const fs = require('fs')
const crypto = require ('crypto')
const alg ='aes-256-ctr'
=======

>>>>>>> ec81fd2def29ee3a532b9447788439c4063353b6

const init = connection => {
app.get('/', async(req, res)=>{
    app.use((req, res, next) =>{
        if(!req.session.user ){
            res.redirect('/login')
        }else{
            next()
        }
    }) 
    res.render('home')
})
app.get('/logout',(req, res) =>{
    req.session.destroy( err => {
        res.redirect('/login')
    })
})
app.get('/login', (req, res) =>{
    res.render('login', {error: false})
})
<<<<<<< HEAD

app.post('/new-account', async(req, res) => {
    const [rows, fields] = await connection.execute('select * from users where email = ?', [req.body.email]) 
    if(rows.length === 0){
        const { name, email, passwd } = req.body
        function crypt(Text){    
        const cipher = crypto.createCipher(alg, passwd)
        const crypted = cipher.update(Text, 'utf8', 'hex')
        return crypted
        } 
      const [inserted, insertFields] = await connection.execute('insert into users (name, email, passwd, role) values(?,?,?,?)', [
       name,
       email,
       (crypt('passwd')),
       'user'
    ])
    const user = {
        id: inserted.insertId,
        name: name,
        role: 'user'

    }
    req.session.user = user
        res.redirect('/')
=======
>>>>>>> ec81fd2def29ee3a532b9447788439c4063353b6

app.post('/login', async(req, res) =>{
    const [rows, fields] = await connection.execute('select * from users where email = ?', [req.body.email])
    if(rows.length===0){
        res.render('login', { error: 'Usuário e/ou senha inválidos.'})
    }else{
           
           
        if(rows[0].passwd===req.body.passwd){
            const userDb = rows[0]
            const user = {
                id: userDb.id,
                name: userDb.name,
                role: userDb.role

            }
            req.session.user = user
            res.redirect('/')
    }else{
            res.render('login', { error: 'Usuário e/ou senha enválidos.'})
        }
    }   
})


return app

}
module.exports = init

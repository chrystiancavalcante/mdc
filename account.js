const express = require ('express')
const app = express.Router()
<<<<<<< HEAD
const fs = require('fs')
const crypto = require ('crypto')
const alg ='aes-256-ctr'

=======
>>>>>>> 6a123ff0112201985a5ac54671efe1206a0f1bb0

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

=======
>>>>>>> 6a123ff0112201985a5ac54671efe1206a0f1bb0

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

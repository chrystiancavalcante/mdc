const express = require ('express')
const app = express.Router()

const init = connection => {
    app.use((req, res, next) =>{
        if(!req.session.user ){
            res.redirect('/')
        }else{
            next()
        }
    })
    app.get('/', (req, res) => {
        res.send(' <h1> Olá Admin ! Podemos Continuar ?</h1>')
    })
   
 
    return app
}

module.exports = init
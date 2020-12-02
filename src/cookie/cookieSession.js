const express = require('express')
const cookieSession = require('cookie-session')
const port = 3000;
const app = express()

app.use(express.json())
app.use(cookieSession({
    name: 'sessionTest',
    secret: 'session secreta',  
    maxAge: 3000, 
    resave: true,
    saveUninitialized: true
}))

app.use(function(req, res, next){
    if(req.session.name){
        req.session.maxAge = Math.floor(Date.now()/60e3)
        console.log(rewe.session.maxAge);
    }else{
        console.log('Error session')
    }
    next()
})

app.get('/', function(req,res,next){
    req.session.cuenta = req.session.cuenta ? req.session.cuenta + 1: 1; 
    res.send(`Haz visto esta pagina ${ req.session.cuenta } veces`)
})

app.listen(port, () => console.log(`Server app listening in port ${port}`))
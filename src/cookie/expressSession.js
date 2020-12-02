const express = require('express');
const session = require('express-session')
const port = 3000

const app = express()
const cookieName = 'luigisession'

app.use(session({
    name: cookieName,
    secret:'123123123',
    resave: true,
    saveUninitialized: true
}))



// app.use(function(req, res, next){
//     if(req.session.count > 10){

//     }else{
//         console.log('Error session')
//     }
//     next()
// })


app.get('/',(req, res) =>{
    req.session.count = req.session.count ? req.session.count + 1: 1;
    res.send(`Bienvenido ! Has visto esta pagina: ${ req.session.count }`)
})

app.get('/data',(req, res) =>{
    if(req.session.name){
        const name = req.session.name;
        console.log(req.body);
        res.send(`POST REQUEST SUCCESS NAMESESSION: ${req.session.name} : ID ${req.session.cookie}`);
    }else{
        console.log(req.session)
    }
})


app.listen(port, () => {
    console.log(`Listening in port ${port}`);
})

//#region Server Configuracion
/**
 *
 */
//#endregion
const express = require("express")
const cookieParser = require('cookie-parser')
const port = 3000;

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use()

//#region Example Use
/*
Crear sesion de cokkie mediante 
1 - una pagina de home / ? con un id session 
2 - pagina con input de datos   / ? almacenar input y sesiones
    almacenar los input en la sesion
3 - dados los input crear otra pagina que retorne un codigo
    y tarde X seg luego de dar el codigo hacer que la session expire o:
    * Presionar button
    * esperar Xseg +
*/
//#endregion 

app.get('/', function(req, res) {
    const cookie = req.cookies;
    res.cookie('username', 'banchile', { maxAge: 5000, httpOnly: true })
    res.cookie('remember','1', { expires: new Date(Date.now() + 900000), httpOnly: true})
    res.send('cookie has been set')
    console.log("Cookies :  ", cookie)
})
  

app.post('/data', function(req, res){ 
    res.send('Enter Data')
})


app.get('/code', (req, res) => res.send('Your Code Session'))
app.listen(port, () => console.log(`Server app listening in port ${port}`))
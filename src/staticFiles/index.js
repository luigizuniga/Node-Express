const express = require('express')
const app = express()
const port = 3000

app.use(express.json());

app.all('/user',(req, res, next) => {
    console.log('Haz pasado por aqui');
    next();
});
  
app.get('/user', (req, res) => {
    res.json({
        sobrina: 'Cony',
        sobrino: 'Sebita'
    });
});

app.post('/user/:id', (req, res) => {     
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST SUCCESS');
});

app.delete('/user/:userID', (req,res) => {
    res.send(`User ${req.params.userID} deleted`)
});

app.put('/user/:userId', (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.userId} updated`);
});
 
//#region Middleware express static 
/**
 * que se encarga de retornar archivos estaticos como html,css & js
 * debe ir la ruta de la carpeta donde estan cargados estos ficheros
 */
//#endregion
app.use(express.static('public'))
app.listen(port, () => console.log(`listening on port port!`))
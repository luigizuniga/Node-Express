const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000


//#region Middleware Morgan
/**
 * Comando morgan('dev') da informacion por consola
 * de las peticiones que ha hecho el usuario 
 * 
 * ejemplo de respuestas del middleware
 * PUT /user/123 200 1.233  ms - 16
 * POST/user     404 1.553  ms - 144
 * GET /user     200 11.967 ms - 38 
 */
//#endregion
app.use(express.json());
app.use(morgan('dev'));


app.all('/user',(req, res, next) => {
    console.log('Haz pasado por aqui');
    next();
});
  
app.get('/user', (req, res) => {
    res.json({
        sobrina: 'C ony',
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
 
app.listen(port, () => console.log(`Example app listening on port port!`))
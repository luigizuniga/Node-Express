const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3000

// Settings
app.set('appName','Express CourseAPP ') // => Nombre Aplicacion
app.set('view engine','ejs')            // => Motor de plantilla (npm i ejs) 

// Middlewares  
app.use(express.json());
app.use(morgan('dev'));

 
// Routes

//#region 
/* Uso de motor de plantilla con envio de datos dinamicos 
 * el envio de datos dinamicos no es posible sin un motor de plantillas
*/
//#endregion
app.get('/', (req, res )=> {
    const data = [{name:'Luigi'},{name:'Sebastian'},{name:'Constanza'}]
    res.render('index.ejs', { persons: data });
});

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
 
app.listen(port, () => 
    console.log(`${app.get('appName')}listening on port  ${port}!`)
)
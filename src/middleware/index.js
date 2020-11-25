const express = require('express')
const app = express()
const port = 3000

//#region Middleware Personalizado
/*
Es mas que un menejador de peticion 
el cual se puede ejecutar antes de llegar a su ruta final
a diferecian de app.all que solo funciona para la ruta indicada
los middleware recibe cualquier ruta que deseamos

En orden de ejecuccion seria, en caso de tener una funcion all

los middleware se puede utilizar para validaciones como:
* Cookie
* Sesiones de usuario
* Otras tareas antes de la ejecucion 
===============================================================
1 - logger (personalizacion)
2 - all function (mismo tipo de ruta)
3 - ruta final 
*/
//#endregion
function logger(req,res, next){
    console.log('REQUEST RECEIVED');
    console.log(`ROUTE RECEIVED ${req.protocol}://${req.get('host')}${req.originalUrl}`); 
    next();
}

app.use(logger);

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
 
app.listen(port, () => console.log(`Example app listening on port port!`))
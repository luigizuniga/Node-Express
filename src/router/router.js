const express = require('express')
const app = express()
const port = 3000

/**
 * Middleware express.json()
 * Basicamente le estamos diciendo a node que pueda comprender los objetos Json
 */
app.use(express.json());

//#region Method All 
/*
 =======================================
            Funcion All
 =======================================
 Esta no es una ruta sino que una funcion de express
 Lo que indicamos es que todas las rutas /user
 Primero pasaran por esta funcion app.all y se ejecutara el codigo que se desea 
 
 =======================================
            Parametro Next
 =======================================
Indica que una vez finalizada la ejecucion del codigo dentro de app.all , una vez validado
con next() nos reenvia al siguiente flujo de la peticion dada

*/
//#endregion 
app.all('/user',(req, res, next) => {
    console.log('Haz pasado por aqui');
    next();
});
  
//#region Method GET
/**
 * Envio de Objeto json a traves de la peticion GET
 * Desde el navegador ingresar a : http://localhost:3000/user
 */
//#endregion
app.get('/user', (req, res) => {
    res.json({
        sobrina: 'Cony',
        sobrino: 'Sebita'
    });
});

//#region Method:POST
/**
 * Peticion POST que recibe los datos enviado por el Cliente mediante una ruta dinamica
 * Desde PostMan añadir a los Headers : Indicando
 * Que la aplicacion desea recibir un dato de tipo  ap../json
 * =======================================
 * Uso desde POSTMAN
 * =======================================
 * Key: Content-type 
 * value: application/json 
 * method post : http://localhost:3000/user/
 * body: json {sobrina: 'Cony version 2.0', sobrino: 'Sebita version 2.0'}  
 * ======================================
 *  Importante
 * ======================================
    Si en el request recibimos = undefined 
    utilizar middleware app.use(express.json())

    En este method podemos guardar los datos en nuestra base de datos

    req.body = cuerpo de la peticion
    req.params = paramaetro de la meticion =>  http://localhost:3000/user/150 <- id
 
    respuesta desde la terminal

    { sobrina: "Cony version 2.0'", sobrino: 'Sebita version 2.0' }
    { id: '150' }

    Lo que estamos diciendo con este envio desde json es que guarde los datos(body) del id(parametro) dado
    no es obligatorio poner como param id, este puede ser cualquiera que se desea usar para identificar
  */
 //#endregion
app.post('/user/:id', (req, res) => {     
    console.log(req.body);
    console.log(req.params);
    res.send('POST REQUEST SUCCESS');
});

//#region Method DELETE
// En este metodo de ejemplo solo estamos indicando que el usuario enviado fue eliminado
//#endregion
app.delete('/user/:userID', (req,res) => {
    res.send(`User ${req.params.userID} deleted`)
});

//#region Method PUT
// Utilizado para la actualizacion de datos
//#endregion
app.put('/user/:userId', (req, res) => {
  console.log(req.body);
  res.send(`User ${req.params.userId} updated`);
});
 
app.listen(port, () => console.log(`Example app listening on port port!`))
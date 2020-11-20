const express = require('express'); //requiero el modulo express
const router = express.Router(); //utilizo la funcion Router() de express

router.get('/',function(req,res){ //la barra representa en este caso a /productos
    res.send('Bienvenidos a mi Sitio...')
})


module.exports = router
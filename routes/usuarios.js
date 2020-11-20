const express = require('express'); //requiero el modulo express
const router = express.Router(); //utilizo la funcion Router() de express

router.get('/',function(req,res){ //la barra representa en este caso a /productos
    res.send('Todos los usuarios')
})

router.get('/:id',function(req,res){
    let idUsuario = req.params.id;
    res.send(`Este es el usuario numero ${idUsuario}`);
})

module.exports = router
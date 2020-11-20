const express = require('express'); //requiero el modulo express
const router = express.Router(); //utilizo la funcion Router() de express

router.get('/',function(req,res){ //la barra representa en este caso a /productos
    res.send('Todos los productos')
})

router.get('/detalle/:id/:descripcion?',function(req,res){
    let idProducto = req.params.id;
    let descripcion = req.params.descripcion;
  
    res.send(`Este es el producto numero ${idProducto} - descripcion: ${typeof descripcion != 'undefined' ? descripcion : 'no hay descripcion'}`);
})

module.exports = router
const express = require('express'); //requiero el modulo express
const app = express(); //utilizo la funcion de alto nivel de express

const rutasHome = require('./routes/home');
const rutasProductos = require('./routes/productos');
const rutasUsuarios = require('./routes/usuarios');

app.listen(3000, () => console.log('Servidor funcionando en el puerto 3000'));


app.use('/',rutasHome);
app.use('/productos',rutasProductos);
app.use('/usuarios',rutasUsuarios);




// Imports (importación de librerías)
const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');
const {mongoose} = require('./database');

//Settings (Configuraciones de puerto de la api)
app.set('port', process.env.PORT || 4000);

//Middleswares (Uso de librerias y ajustes)
app.use(morgan('dev'));
app.use(express.json())
app.use(cors({origin: 'http://localhost:3000'}));


//Routes (Inicialización de rutas de la rest API)
app.use('/products',require('./routes/products.routes'));


// Server (Inicialización del puerto del servidor)
app.listen(4000, ()=> {
    console.log("Server On Port ", app.get('port'))
});

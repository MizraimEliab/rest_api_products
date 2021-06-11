// Connect to mongodb (Conexión a la base de datos)
const mongoose = require('mongoose');
// Define uri connection  (Se define nuestra conexión con el servidor de mongodb) Nota también puede ser: mongodb://127.0.0.1/products
const URI = 'mongodb://localhost/products';
// Connect to mongodb (usamos a mongoose para conectarnos a mongodb)
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(db => console.log("DB is conected successfully "))
.catch(err => console.error(err))

// Export module  (Exportación de la conexión con mongodb)
module.exports = mongoose;

// Imports (importación de librerías)
const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');
// Use the Schema (Uso del esquema de mongoose)
const { Schema } = mongoose;

//Create a const that contains the schema structure (Creación del esquema de productos)
const products = new Schema({
    name: {type: String, required: true},
    brand: {type: String, required: true},
    stock: {type: Number, required: true},
    price: {type: Number,  required: true},
    status: {type: Boolean, required:true}
},
{
    timestamps: true
});

products.plugin(autoIncrement.plugin, {
    model: '_id',
    field: '_id',
    startAt: 1,
    incrementBy: 1
});


// Export schema  (Exportación de esquema)
module.exports = mongoose.model('Products', products);

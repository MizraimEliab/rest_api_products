// Imports (importación de librerías)
const express = require('express');
const router = express.Router();
// Methods file imports (importación de archivo con la lógica de programación)
const productsController = require('../controllers/Products.controller');

// GET all products (Obtener todos los productos mediante el verbo GET)
router.get('/', productsController.getProducts);
// GET one product (Obtener un solo producto mediante el verbo GET)
router.get('/:id', productsController.getProduct);
// POST one product (Crear un solo producto mediante el verbo POST)
router.post('/', productsController.postProduct);
// PUT one product (Editar un solo producto mediante el verbo PUT)
router.put('/:id', productsController.putProduct);
// PUT one product (Elimina lógicamente un solo producto mediante el verbo PUT)
router.put('/delete/:id', productsController.deleteProduct);


// Export module  (Exportación de rutas)
module.exports = router;

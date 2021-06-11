const product = require('../models/Products');

const productsController = {};

// Obtener todos los productos
productsController.getProducts = async (req, res) =>{
   const products =  await product.find();
   res.json(products);
}


// Obtener un solo prodcuto
productsController.getProduct = async (req , res) =>{
    const oneProduct = await product.findById(req.params.id)
    res.json(oneProduct);
}


// Crear un nuevo prodcuto
productsController.postProduct = async (req, res) => {
  const OneProduct = {
      name: req.body.name,
      brand: req.body.brand,
      stock: req.body.stock,
      price: req.body.price,
      status: true // o status: req.body.status
  }
  const newProduct = new product(OneProduct)
  await newProduct.save();
  res.json({
      status: "Product saved",
      data: newProduct
  });
}

// Actualizar a un producto
productsController.putProduct = async (req, res) =>{
    const {id} = req.params;
    const oneProduct = {
      name: req.body.name,
      brand: req.body.brand,
      stock: req.body.stock,
      price: req.body.price
    };
    await product.findByIdAndUpdate(id, {$set: oneProduct}, {new:true} );
    res.json({
        status: "Product Updated",
        data: oneProduct
    })
}


// Actualizar(Eliminar) a un producto
userController.deleteProduct = async (req, res) =>{
    const {id} = req.params;
    const deleteProduct = {
        status: false // o status: req.body.status
    };
    await product.findByIdAndUpdate(id, {$set: deleteProduct}, {new:true} );
    res.json({
        status: "User deleted",
        data: deleteProduct
    })
}



module.exports = productsController;

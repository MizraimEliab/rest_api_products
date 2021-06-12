const product = require('../models/Products');

const productsController = {};

// Obtener todos los productos
productsController.getProducts = async (req, res) =>{
   const products =  await product.find();
   //res.json(products);
   productsactive = [];
   products.forEach((value) => {
     if (value.status == true){
       productsactive.push(value);
     }
   });
   res.json(productsactive);
}


// Obtener un solo prodcuto
productsController.getProduct = async (req , res) =>{
    const oneProduct = await product.findById(req.params.id)
    if (oneProduct.status == true){
      res.json(oneProduct);
    }else{
      res.status(404).send('Not found')
      //res.json({status: "not found"});
    }

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
  const products =  await product.find();
  let repeated = false
  products.forEach((value) => {
    if (value.name == OneProduct.name && value.brand == OneProduct.brand){
      repeated = true
    }
    //console.log(repeated);
  });

  //console.log(repeated);
  if (repeated == false){
    const newProduct = new product(OneProduct)
    await newProduct.save();
    res.json({
        status: "Product saved",
        data: newProduct
    });
  }else{
    res.json({status:"product repeated"})
  }

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
productsController.deleteProduct = async (req, res) =>{
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

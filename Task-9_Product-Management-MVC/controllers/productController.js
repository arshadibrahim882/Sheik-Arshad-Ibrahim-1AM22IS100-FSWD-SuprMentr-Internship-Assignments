const products = require("../data/products");

//GET all products.
exports.getAllProducts = (req, res) => {
  res.json(products);
};

//GET product by ID.
exports.getProductById = (req, res) => {
  const id = parseInt(req.params.id);
  const product = products.find(p => p.id === id);
  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }
  res.json(product);
};

//ADD product.
exports.addProduct = (req, res) => {
  const { name, price, category } = req.body;
  if (!name || !price || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }
  //Generate new ID
  const newId = products.length > 0
    ? products[products.length - 1].id + 1
    : 1;
  const newProduct = {
    id: newId,
    name,
    price,
    category
  };
  products.push(newProduct);
  res.json({
    message: "Product added successfully",
    product: newProduct
  });
};
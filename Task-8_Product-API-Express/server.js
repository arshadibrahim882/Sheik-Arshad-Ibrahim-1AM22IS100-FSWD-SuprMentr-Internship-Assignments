const express = require("express");
const app = express();

const PORT = 3000;

//Middleware.
app.use(express.json());

//Products array(database).
let products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];


//GET all products.
app.get("/products", (req, res) => {
  res.json(products);
});


//POST new product.
app.post("/products", (req, res) => {
  const { name, price } = req.body;

  const newProduct = {
    id: products.length + 1,
    name,
    price
  };

  products.push(newProduct);
  res.json({
    message: "Product added successfully",
    product: newProduct
  });
});


//PUT update product.
app.put("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { name, price } = req.body;
  const product = products.find(p => p.id === id);

  if (!product) {
    return res.status(404).json({ message: "Product not found" });
  }

  product.name = name || product.name;
  product.price = price || product.price;
  res.json({
    message: "Product updated successfully",
    product
  });
});


//DELETE product.
app.delete("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Product not found" });
  }

  const deletedProduct = products.splice(index, 1);
  res.json({
    message: "Product deleted successfully",
    product: deletedProduct[0]
  });
});


//Start server.
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
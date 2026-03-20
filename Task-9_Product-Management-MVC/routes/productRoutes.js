const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct
} = require("../controllers/productController");

router.get("/products", getAllProducts);
router.get("/products/:id", getProductById);
router.post("/products", addProduct);

module.exports = router;
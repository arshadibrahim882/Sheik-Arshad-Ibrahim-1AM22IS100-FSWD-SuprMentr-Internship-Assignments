import React, { useState, useEffect } from "react";

const ProductCart = () => {

  //Product data.
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Mobile", price: 20000 },
    { id: 3, name: "Headphones", price: 2000 },
    { id: 4, name: "Keyboard", price: 1500 }
  ];

  //State for cart count.
  const [cartCount, setCartCount] = useState(0);

  //Add to cart function.
  const addToCart = () => {
    setCartCount(prevCount => prevCount + 1);
  };

  //Log when cart updates.
  useEffect(() => {
    console.log("Cart updated. Total items:", cartCount);
  }, [cartCount]);

  return (
    <div style={{ textAlign: "center", marginTop: "40px" }}>
      <h1>Product List</h1>

      <h2>Cart Items: {cartCount}</h2>

      {products.map((product) => (
        <div key={product.id} style={{ margin: "15px" }}>
          <h3>{product.name}</h3>
          <p>Price: ₹{product.price}</p>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductCart;
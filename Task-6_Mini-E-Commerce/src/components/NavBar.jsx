import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {

  const { cart } = useContext(CartContext);

  return (
    <div style={{ padding: "10px", background: "#222", color: "white" }}>
      <h2>Mini E-Commerce</h2>
      <p>Cart Items: {cart.length}</p>
    </div>
  );
}

export default Navbar;
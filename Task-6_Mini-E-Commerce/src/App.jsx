import React from "react";
import Navbar from "./components/NavBar";
import Products from "./pages/Products";
import Cart from "./components/Cart";
import { CartProvider } from "./context/CartContext";

/*
      Mini E-Commerce.

      Requirements:
      Product list page.
      Add to cart.
      Cart count in Navbar.
      Remove item.

      Use Context instead of prop drilling.
      Separate services folder.
*/

function App() {
  return (
    <CartProvider>
      <Navbar />
      <Products />
      <Cart />
    </CartProvider>
  );
}

export default App;
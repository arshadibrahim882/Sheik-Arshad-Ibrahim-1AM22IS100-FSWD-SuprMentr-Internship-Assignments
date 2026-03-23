import { useState } from "react"
import productsData from "./data/products"
import ProductList from "./components/ProductList"
import Filter from "./components/Filter"

function App() {
  const [category, setCategory] = useState("")
  const [search, setSearch] = useState("")

  const filteredProducts = productsData.filter((product) => {
    return (
      (category === "" || product.category === category) &&
      product.name.toLowerCase().includes(search.toLowerCase())
    )
  })

  return (
    <div style={{ padding: "20px" }}>
      <h1>Product Listing</h1>
      <Filter setCategory={setCategory} setSearch={setSearch} />
      <ProductList products={filteredProducts} />
    </div>
  )
}

export default App
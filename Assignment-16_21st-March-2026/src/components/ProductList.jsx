import ProductCard from "./ProductCard"

const ProductList = ({ products }) => {
  return (
    <div style={styles.container}>
      {products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  )
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px"
  }
}

export default ProductList
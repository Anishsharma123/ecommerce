import "../../styles/pages/products.css";

function Products() {
  return (
    <>

      <div className="products-page">
        <h1>All Products</h1>

        <div className="products-grid">
          <div className="product-box">Product 1</div>
          <div className="product-box">Product 2</div>
          <div className="product-box">Product 3</div>
          <div className="product-box">Product 4</div>
        </div>
      </div>

    </>
  );
}

export default Products;
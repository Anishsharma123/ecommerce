import "../../styles/pages/shopDetails.css";

function ShopDetails() {
  return (
    <>

      <div className="shop-details-page">

        <div className="shop-banner">
          <div className="banner-overlay">
            <h1>Tech World</h1>
            <p>Your Trusted Electronics Store</p>
          </div>
        </div>

        <div className="shop-info-section">
          <div className="shop-info-card">
            <h2>About Shop</h2>

            <p>
              Tech World offers premium quality electronics,
              gaming accessories, laptops, smartphones,
              and computer hardware.
            </p>
          </div>

          <div className="shop-stats">
            <div className="stat-box">
              <h3>120+</h3>
              <p>Products</p>
            </div>

            <div className="stat-box">
              <h3>4.8</h3>
              <p>Rating</p>
            </div>

            <div className="stat-box">
              <h3>15k+</h3>
              <p>Customers</p>
            </div>
          </div>
        </div>

        <section className="shop-products">
          <h2>Shop Products</h2>

          <div className="products-grid">
            <div className="product-card">Gaming Mouse</div>
            <div className="product-card">Mechanical Keyboard</div>
            <div className="product-card">Gaming Monitor</div>
            <div className="product-card">Headphones</div>
          </div>
        </section>

      </div>

    </>
  );
}

export default ShopDetails;
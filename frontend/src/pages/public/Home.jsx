import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import "../../styles/pages/home.css";

function Home() {
  return (
    <>
      <Navbar />

      <div className="hero">
        <h1>Discover Amazing Products</h1>
        <p>Shop from trusted vendors with community reviews.</p>

        <button>Explore Products</button>
      </div>

      <section className="featured-section">
        <h2>Featured Products</h2>

        <div className="product-grid">
          <div className="product-card">Product 1</div>
          <div className="product-card">Product 2</div>
          <div className="product-card">Product 3</div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;
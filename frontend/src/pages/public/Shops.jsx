import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

import "../../styles/pages/shops.css";

function Shops() {
  return (
    <>
      <Navbar />

      <div className="shops-page">
        <h1>Explore Shops</h1>

        <div className="shops-grid">
          <div className="shop-card">
            <div className="shop-image"></div>

            <h2>Tech World</h2>

            <p>Electronics & Gadgets</p>

            <button>Visit Shop</button>
          </div>

          <div className="shop-card">
            <div className="shop-image"></div>

            <h2>Fashion Hub</h2>

            <p>Clothing & Accessories</p>

            <button>Visit Shop</button>
          </div>

          <div className="shop-card">
            <div className="shop-image"></div>

            <h2>Home Essentials</h2>

            <p>Furniture & Decor</p>

            <button>Visit Shop</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shops;
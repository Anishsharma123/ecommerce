import { Link } from "react-router-dom";

import Button from "../ui/Button";

import "../../styles/components/productCard.css";

function ProductCard({ product }) {
  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
      />

      <h3>{product.name}</h3>

      <p className="shop-name">
        {product.shop}
      </p>

      <p className="rating">
        ⭐ {product.rating}
      </p>

      <p className="price">
        ₹{product.price}
      </p>

      <Link to={`/product/${product.id}`}>
        <Button>
          View Product
        </Button>
      </Link>

    </div>
  );
}

export default ProductCard;
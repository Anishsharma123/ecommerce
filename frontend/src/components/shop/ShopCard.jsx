import { Link } from "react-router-dom";

import "../../styles/components/shopCard.css";

function ShopCard({ shop }) {
  return (
    <Link
      to={`/shop/${shop.id}`}
      className="shop-link"
    >
      <div className="shop-card">

        <img
          src={shop.banner}
          alt={shop.name}
        />

        <div className="shop-card-content">

          <h3>{shop.name}</h3>

          <p>{shop.category}</p>

          <p>
            ⭐ {shop.rating}
          </p>

        </div>

      </div>
    </Link>
  );
}

export default ShopCard;
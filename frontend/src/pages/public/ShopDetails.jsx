import { useParams } from "react-router-dom";

import shops from "../../data/shops";
import products from "../../data/products";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

import ProductGrid from "../../components/product/ProductGrid";

import "../../styles/pages/shopDetails.css";

function ShopDetails() {

  const { id } = useParams();

  const shop = shops.find(
    item => item.id === Number(id)
  );

  if (!shop) {
    return <h1>Shop Not Found</h1>;
  }

  const shopProducts = products.filter(
    product =>
      product.shop === shop.name
  );

  return (
    <Container>

      <div className="shop-banner">

        <img
          src={shop.banner}
          alt={shop.name}
        />

      </div>

      <div className="shop-info">

        <h1>{shop.name}</h1>

        <p>{shop.description}</p>

        <div className="shop-stats">

          <span>
            ⭐ {shop.rating}
          </span>

          <span>
            👥 {shop.followers}
          </span>

        </div>

        <Button>
          Join Community
        </Button>

      </div>

      <div className="shop-products">

        <h2>Products</h2>

        <ProductGrid
          products={shopProducts}
        />

      </div>

    </Container>
  );
}

export default ShopDetails;
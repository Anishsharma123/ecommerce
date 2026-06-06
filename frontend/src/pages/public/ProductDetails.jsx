import { useParams } from "react-router-dom";

import products from "../../data/products";

import Container from "../../components/ui/Container";
import Button from "../../components/ui/Button";

import ProductGrid from "../../components/product/ProductGrid";

import "../../styles/pages/productDetails.css";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return (
      <Container>
        <h1>Product Not Found</h1>
      </Container>
    );
  }

  const relatedProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <Container>
      {/* Product Main Section */}

      <div className="product-details">
        <div className="image-section">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="info-section">
          <h1>{product.name}</h1>

          <p className="shop">
            Sold by {product.shop}
          </p>

          <p className="rating">
            ⭐ {product.rating}
          </p>

          <p className="price">
            ₹{product.price}
          </p>

          <p className="description">
            {product.description}
          </p>

          <Button>
            Add To Cart
          </Button>
        </div>
      </div>

      {/* Reviews Section */}

      <section className="reviews-section">
        <h2>Customer Reviews</h2>

        <div className="review-card">
          <h4>Anish Sharma</h4>
          <p>
            Amazing product. Worth every penny.
          </p>
        </div>

        <div className="review-card">
          <h4>Rahul Kumar</h4>
          <p>
            Excellent quality and very comfortable to use.
          </p>
        </div>
      </section>

      {/* Related Products */}

      <section className="related-products">
        <h2>Related Products</h2>

        <ProductGrid
          products={relatedProducts}
        />
      </section>
    </Container>
  );
}

export default ProductDetails;
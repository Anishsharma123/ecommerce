import "../../styles/pages/productDetails.css";

function ProductDetails() {
  return (
    <>

      <div className="product-details">
        <div className="product-image"></div>

        <div className="product-info">
          <h1>Gaming Headphones</h1>

          <p className="price">$199</p>

          <p>
            Premium quality gaming headset with immersive sound experience.
          </p>

          <button>Add To Cart</button>
        </div>
      </div>

    </>
  );
}

export default ProductDetails;
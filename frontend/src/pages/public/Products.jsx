import products from "../../data/products";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ProductGrid from "../../components/product/ProductGrid";

function Products() {
  return (
    <Container>

      <SectionTitle
        title="All Products"
        subtitle="Explore products from all shops"
      />

      <ProductGrid
        products={products}
      />

    </Container>
  );
}

export default Products;
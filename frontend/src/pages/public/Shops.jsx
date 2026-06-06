import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ShopGrid from "../../components/shop/ShopGrid";

import shops from "../../data/shops";

function Shops() {
  return (
    <Container>

      <SectionTitle
        title="Explore Shops"
        subtitle="Discover trusted vendors"
      />

      <ShopGrid shops={shops} />

    </Container>
  );
}

export default Shops;
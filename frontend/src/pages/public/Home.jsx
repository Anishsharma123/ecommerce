import "../../styles/pages/home.css";
import products from "../../data/products";

import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

import ProductGrid from "../../components/product/ProductGrid";
function Home() {
  return (
    <>
      <div className="hero">
        <h1>Discover Amazing Products</h1>
        <p>Shop from trusted vendors with community reviews.</p>

        <button>Explore Products</button>
      </div>

      <SectionTitle
        title="Featured Products"
        subtitle="Trending products this week"
      />

      <ProductGrid products={products.slice(0, 3)} />
    </>
  );
}

export default Home;

// import products from "../../data/products";

// import Container from "../../components/ui/Container";
// import SectionTitle from "../../components/ui/SectionTitle";

// import ProductGrid from "../../components/product/ProductGrid";

// function Home() {
//   return (
//     <Container>

//       <SectionTitle
//         title="Featured Products"
//         subtitle="Trending products this week"
//       />

//       <ProductGrid
//         products={products.slice(0, 3)}
//       />

//     </Container>
//   );
// }

// export default Home;

// import "../../styles/pages/home.css";

// function Home() {
//   return (
//     <>

//       <div className="hero">
//         <h1>Discover Amazing Products</h1>
//         <p>Shop from trusted vendors with community reviews.</p>

//         <button>Explore Products</button>
//       </div>

//       <section className="featured-section">
//         <h2>Featured Products</h2>

//         <div className="product-grid">
//           <div className="product-card">Product 1</div>
//           <div className="product-card">Product 2</div>
//           <div className="product-card">Product 3</div>
//         </div>
//       </section>

//     </>
//   );
// }

// export default Home;

import Button from "../../components/ui/Button";
import Card from "../../components/ui/Card";
import Container from "../../components/ui/Container";
import SectionTitle from "../../components/ui/SectionTitle";

function Home() {
  return (
    <Container>

      <SectionTitle
        title="Featured Products"
        subtitle="Explore our latest products"
      />

      <Card>
        <h3>Gaming Mouse</h3>
        <p>₹1999</p>

        <Button>
          Add To Cart
        </Button>
      </Card>

    </Container>
  );
}

export default Home;
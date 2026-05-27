import { Link } from "react-router-dom";
import "../../styles/components/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">ShopSphere</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/shops">Shops</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
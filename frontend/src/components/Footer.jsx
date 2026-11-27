import { Link } from "react-router-dom";
export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>Shoply</h2>
        <p>Discover your next favorite thing.</p>

        <div className="footer-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/deals">Deals</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 Shoply. All rights reserved.</p>
      </div>
    </footer>
  );
};


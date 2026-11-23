import { NavLink } from "react-router-dom";
export const Navbar = ({ cart }) => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <h1>Shoply</h1>
      </div>
      <div className="nav-center">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/deals">Deals</NavLink>
      </div>
      <div className="nav-search">
        <input type="search" placeholder="search products..." />
      </div>
      <div className="nav-right">
        <NavLink to="/login">Sign in</NavLink>
        <NavLink to="/cart">Cart ({cart.length})</NavLink>
      </div>
    </nav>
  );
};

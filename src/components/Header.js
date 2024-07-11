import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './Header.css'; // Import your CSS file

const Header = () => {
  const cart = useSelector(state => state.cart);
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="header-container"> {/* Apply a class name for styling */}
      <h1 className="header-title">Paradise Nursery</h1>
      <nav className="header-nav">
        <Link to="/" className="header-link">Home</Link>
        <Link to="/products" className="header-link">Products</Link>
        <Link to="/cart" className="header-link">Cart ({totalItems})</Link>
      </nav>
    </header>
  );
};

export default Header;

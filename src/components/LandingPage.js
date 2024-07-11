import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => (
  <div className="landing-page">
    <h1>Welcome to Paradise Nursery</h1>
    <p>Your ultimate destination for premium houseplants that breathe life into your spaces. At Paradise Nursery, we specialize in offering a curated selection of exotic and traditional houseplants, meticulously sourced to bring beauty and tranquility to your home or office. With a passion for green living, we pride ourselves on providing top-quality plants that are not only aesthetically pleasing but also easy to care for, ensuring that even those new to gardening can enjoy a thriving indoor garden. Whether you're seeking a statement plant for your living room or a collection of air-purifying wonders 
      for your workspace, Paradise Nursery is here to help you cultivate your own slice of paradise.</p>
    <Link to="/products">
      <button>Get Started</button>
    </Link>
  </div>
);

export default LandingPage;

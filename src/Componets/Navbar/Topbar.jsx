import React from "react";
import { Link } from "react-router-dom";
import './BarStyle.css';

export default function Topbar() {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src="/Assets/Logo1.png" alt="Ice Cream" className="logo" />
        <h3>Fr<span>o</span>st B<span>i</span>te</h3>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Our Menu</Link></li>
        <li><Link to="/order">Online Order</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="auth-buttons">
        <button className="login">Login</button>
        <button className="signup">Sign-Up</button>
      </div>
    </nav>
  );
}

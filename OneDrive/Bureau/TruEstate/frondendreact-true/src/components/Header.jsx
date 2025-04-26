// src/components/Header.jsx
import React from "react";
import { Link, useLocation } from "react-router-dom"; // 👈 Importer useLocation

export default function Header() {
  const location = useLocation(); // 👈 savoir quelle page est active

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src="/logo.png" alt="Truestate Logo" />
        </Link>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/buy">Buy</Link>
        <Link to="/rent">Rent</Link>
        <Link to="/sell">Sell</Link>
      </nav>

      <div className="auth-buttons">
        <Link
          to="/login"
          className={`auth-button ${location.pathname === "/login" ? "active" : ""}`}
        >
          <img src="/user-icon.png" alt="User Icon" />
          Login
        </Link>
        <Link
          to="/signup"
          className={`auth-button ${location.pathname === "/signup" ? "active" : ""}`}
        >
          <img src="/user-icon.png" alt="User Icon" />
          Sign Up
        </Link>
      </div>
    </header>
  );
}

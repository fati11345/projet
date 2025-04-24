import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const properties = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: "92 ALLIUM PLACE, ORLANDO FL 32827",
  price: "$590,693",
  beds: 4,
  baths: 4,
  area: "2,096.00 ft",
  agent: `Agent ${i + 1}`,
  image: `/images/property${(i % 3) + 1}.jpg`,
}));

const extraProperties = Array.from({ length: 10 }, (_, i) => ({
  ...properties[i % 6],
  id: i + 7,
  agent: `Agent ${i + 7}`,
}));

const carouselImages = [
  "/images/carousel1.jpg",
  "/images/carousel2.jpg",
  "/images/carousel3.jpg",
  "/images/carousel4.jpg",
  "/images/carousel5.jpg",
];

function App() {
  const [allProperties, setAllProperties] = useState(properties);
  const [carouselIndex, setCarouselIndex] = useState(0);

  const loadMore = () => {
    setAllProperties([...allProperties, ...extraProperties]);
  };

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">
          <img src="/logo.png" alt="Logo" className="logo" />
          <nav className="nav">
            <Link to="/" className="active">Home</Link>
            <Link to="/buy">Buy</Link>
            <Link to="/rent">Rent</Link>
            <Link to="/sell">Sell</Link>
          </nav>
          <div className="auth-buttons">
            <button className="btn">Login</button>
            <button className="btn-outline">Sign up</button>
          </div>
        </header>

        <section className="hero">
          <input
            type="text"
            placeholder="Search for accommodation by city, type or budget..."
            className="search-bar"
          />
        </section>

        <section className="properties">
          <h2>Properties</h2>
          <div className="property-options">
            {['Sell your home', 'Rent your home', 'Buy a home'].map((text, index) => (
              <Link to={`/${text.split(' ')[0].toLowerCase()}`} key={index} className="property-card">
                <h3>{text}</h3>
                <p>We do a free evaluation to be sure you want to start {text.split(' ')[0].toLowerCase()}ing.</p>
              </Link>
            ))}
          </div>
        </section>

        <section className="latest">
          <h2>Latest Properties of Rent</h2>
          <div className="property-grid">
            {allProperties.map((p) => (
              <div key={p.id} className="property">
                <img src={p.image} alt="Property" className="property-image" />
                <h3>{p.title}</h3>
                <p>{p.price}</p>
                <p>{p.beds} Beds • {p.baths} Baths • {p.area}</p>
                <p className="agent">{p.agent}</p>
              </div>
            ))}
          </div>
          <button className="btn" onClick={loadMore}>Load more listing</button>
        </section>

        <section className="carousel">
          <h2>Latest Properties of Rent</h2>
          <div className="carousel-wrapper">
            <button className="carousel-button" onClick={prevSlide}>{"<"}</button>
            <img src={carouselImages[carouselIndex]} className="carousel-image" alt="carousel" />
            <button className="carousel-button" onClick={nextSlide}>{">"}</button>
          </div>
        </section>

        <footer className="footer">
          <div>
            <h4>Use cases</h4>
            <ul>
              <li>UI design</li><li>UX design</li><li>Wireframing</li><li>Brainstorming</li>
              <li>Online whiteboard</li><li>Team collaboration</li>
            </ul>
          </div>
          <div>
            <h4>Explore</h4>
            <ul>
              <li>Design</li><li>Prototyping</li><li>Design systems</li><li>Collaboration</li>
            </ul>
          </div>
          <div>
            <h4>Resources</h4>
            <ul>
              <li>Blog</li><li>Support</li><li>Developers</li><li>Resource library</li>
            </ul>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;

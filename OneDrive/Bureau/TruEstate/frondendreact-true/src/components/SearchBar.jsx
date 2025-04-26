// src/components/SearchBar.jsx
import React from "react";


export default function SearchBar() {
  return (
    <section
      className="search-section"
      style={{ backgroundImage: `url('/2022.png')` }}
    >
      <div className="search-bar">
        <input type="text" placeholder="Search for accommodation by city, type or budget..." />
        <button>🔍</button>
      </div>
    </section>
  );
}

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import FeaturedProperties from "./components/FeaturedProperties";
import PropertyServices from "./components/PropertyServices";
import LatestProperties from "./components/LatestProperties";
import Contact from "./components/Contact";

import PropertyCarousel from "./components/PropertyCarousel";

import "./App.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/contact" element={<Contact />} />
        {/* Page d'accueil */}
        <Route
          path="/"
          element={
            <>
              <SearchBar />
              <FeaturedProperties />
              <PropertyServices />
              <LatestProperties />
              
              <PropertyCarousel />
            </>
          }
        />
        {/* Page Buy */}
        <Route
          path="/buy"
          element={
            <>
              <h1>Buy Page</h1>
              {/* Ajoutez ici les composants pour la page Buy */}
            </>
          }
        />
        {/* Page Rent */}
        <Route
          path="/rent"
          element={
            <>
              <h1>Rent Page</h1>
              {/* Ajoutez ici les composants pour la page Rent */}
            </>
          }
        />
        {/* Page Sell */}
        <Route
          path="/sell"
          element={
            <>
              <h1>Sell Page</h1>
              {/* Ajoutez ici les composants pour la page Sell */}
            </>
          }
        />
      </Routes>
    </Router>
  );
}

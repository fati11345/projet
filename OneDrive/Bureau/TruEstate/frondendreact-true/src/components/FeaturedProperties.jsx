// src/components/FeaturedProperties.jsx
import React from "react";

export default function FeaturedProperties() {
  const properties = [
    { image: "/property1.png", title: "Washington", desc: "Primrose" },
    { image: "/property2.png", title: "Franklin", desc: "Downtown" },
    { image: "/img6.png", title: "Clinton", desc: "Suburbs" },
    { image: "/property1.png", title: "Arlington", desc: "Primrose" },
    { image: "/property2.png", title: "Centerville", desc: "Lakeview" },
    { image: "/property3.png", title: "Sunset Ridge", desc: "Mountain View" },
    { image: "/property4.png", title: "Oakwood", desc: "Riverside" },
    { image: "/property5.png", title: "Lakeside Manor", desc: "Seaside" }
  ];

  return (
    <section className="featured-properties">
      {properties.map((item, index) => (
        <div key={index} className="property-card">
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
}

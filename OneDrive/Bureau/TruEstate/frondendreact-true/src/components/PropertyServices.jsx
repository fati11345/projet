// src/components/PropertyServices.jsx
import React, { useState } from "react";


export default function PropertyServices() {
  const [showMore, setShowMore] = useState(null);

  const services = [
    { id: 1, icon: "/maison.png", title: "Sell your home", shortDesc: "Sell your home effortlessly.", fullDesc: "reach the right buyers and get the best value for your property quickly and securely." },
    { id: 2, icon: "/maison elec.png", title: "Rent your home", shortDesc: "Find your dream home to rent with ease.", fullDesc: " explore a wide range of beautiful properties tailored to your needs and start your new journey today." },
    { id: 3, icon: "/maison 2.png", title: "Buy your home", shortDesc: "Find your dream home.", fullDesc: "Browse thousands of homes with expert guidance from our agents." }
  ];

  return (
    
    <section className="property-services">
      {/* <h1 className='fat'>Propertice</h1> */}
      {services.map(service => (
        <div key={service.id} className="service-card">
          <img src={service.icon} alt={service.title} />
          <h4>{service.title}</h4>
          <p>{showMore === service.id ? service.fullDesc : service.shortDesc}</p>
          <button onClick={() => setShowMore(service.id)}>
            {showMore === service.id ? "Hide" : "Read More"}
          </button>
        </div>
      ))}
    </section>
  );
}

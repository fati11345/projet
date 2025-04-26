import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function LatestProperties() {
  const [properties, setProperties] = useState([
{
      id: 1,
      image: "/property1.png",
      title: "92 Allium Place, Orlando FL",
      price: "$1,930.00",
      rooms: "3 Beds • 2 Bath",
      car: "15 min drive",
      agent: { name: "Jerry Wilson", photo: "/agent1.png" }
    },
    {
      id: 2,
      image: "/property2.png",
      title: "92 Allium Place, Orlando FL",
      price: "$2,430.00",
      rooms: "4 Beds • 3 Bath",
      car: "12 min drive",
      agent: { name: "Jenny Wilson", photo: "/agent2.png" }
    },
    {
      id: 3,
      image: "/property3.png",
      title: "123 Palm Avenue, Tampa FL",
      price: "$2,150.00",
      rooms: "2 Beds • 1 Bath",
      car: "10 min drive",
      agent: { name: "Robert Smith", photo: "/agent3.png" }
    },
    {
      id: 4,
      image: "/property1.png",
      title: "77 Sunset Blvd, Los Angeles CA",
      price: "$4,600.00",
      rooms: "5 Beds • 4 Bath",
      car: "20 min drive",
      agent: { name: "Sophia Brown", photo: "/agent4.png" }
    },
    {
      id: 5,
      image: "/property2.png",
      title: "12 Ocean Drive, Miami Beach FL",
      price: "$3,500.00",
      rooms: "3 Beds • 2 Bath",
      car: "8 min drive",
      agent: { name: "Liam Johnson", photo: "/agent5.png" }
    },
    {
      id: 6,
      image: "/property3.png",
      title: "88 Maple Street, Austin TX",
      price: "$2,800.00",
      rooms: "4 Beds • 3 Bath",
      car: "18 min drive",
      agent: { name: "Olivia Davis", photo: "/agent6.png" }
    },
    {
      id: 7,
      image: "/property1.png",
      title: "1600 Pennsylvania Ave, Washington DC",
      price: "$5,200.00",
      rooms: "6 Beds • 5 Bath",
      car: "25 min drive",
      agent: { name: "Noah Miller", photo: "/agent7.png" }
    },
    {
      id: 8,
      image: "/property2.png",
      title: "789 Hilltop Lane, Denver CO",
      price: "$1,700.00",
      rooms: "2 Beds • 1 Bath",
      car: "14 min drive",
      agent: { name: "Emma Garcia", photo: "/agent8.png" }
    },
    {
      id: 9,
      image: "/property3.png",
      title: "55 Cherry Lane, Nashville TN",
      price: "$2,100.00",
      rooms: "3 Beds • 2 Bath",
      car: "11 min drive",
      agent: { name: "James Martinez", photo: "/agent9.png" }
    },
    {
      id: 10,
      image: "/property1.png",
      title: "32 Pine Street, Dallas TX",
      price: "$2,950.00",
      rooms: "4 Beds • 3 Bath",
      car: "9 min drive",
      agent: { name: "Isabella Rodriguez", photo: "/agent10.png" }
    },
    {
      id: 11,
      image: "/property2.png",
      title: "205 Cedar Road, Charlotte NC",
      price: "$2,500.00",
      rooms: "3 Beds • 2 Bath",
      car: "16 min drive",
      agent: { name: "Elijah Lee", photo: "/agent11.png" }
    },
    {
      id: 12,
      image: "/property3.png",
      title: "401 Lakeview Dr, Orlando FL",
      price: "$2,200.00",
      rooms: "2 Beds • 1 Bath",
      car: "13 min drive",
      agent: { name: "Mia Perez", photo: "/agent12.png" }
    },
    {
      id: 13,
      image: "/property1.png",
      title: "90 Riverbend Rd, Atlanta GA",
      price: "$3,700.00",
      rooms: "5 Beds • 4 Bath",
      car: "19 min drive",
      agent: { name: "Lucas Thompson", photo: "/agent13.png" }
    },
    {
      id: 14,
      image: "/property2.png",
      title: "14 Greenway Drive, Chicago IL",
      price: "$2,600.00",
      rooms: "3 Beds • 2 Bath",
      car: "7 min drive",
      agent: { name: "Amelia White", photo: "/agent14.png" }
    },
    {
      id: 15,
      image: "/property3.png",
      title: "76 Elm Street, New York NY",
      price: "$4,800.00",
      rooms: "4 Beds • 3 Bath",
      car: "22 min drive",
      agent: { name: "William Harris", photo: "/agent15.png" }
    },
    {
      id: 16,
      image: "/property1.png",
      title: "100 Bay Avenue, San Diego CA",
      price: "$3,200.00",
      rooms: "3 Beds • 2 Bath",
      car: "15 min drive",
      agent: { name: "Charlotte Clark", photo: "/agent16.png" }
    },
    {
      id: 17,
      image: "/property2.png",
      title: "5 West End Rd, Seattle WA",
      price: "$2,950.00",
      rooms: "4 Beds • 3 Bath",
      car: "17 min drive",
      agent: { name: "Benjamin Lewis", photo: "/agent17.png" }
    },
    {
      id: 18,
      image: "/property3.png",
      title: "600 Magnolia Blvd, Houston TX",
      price: "$2,400.00",
      rooms: "2 Beds • 2 Bath",
      car: "12 min drive",
      agent: { name: "Evelyn Walker", photo: "/agent18.png" }
    },
    {
      id: 19,
      image: "/property1.png",
      title: "150 Sunset View, Phoenix AZ",
      price: "$2,100.00",
      rooms: "2 Beds • 1 Bath",
      car: "10 min drive",
      agent: { name: "Logan Young", photo: "/agent19.png" }
    },
    {
      id: 20,
      image: "/property2.png",
      title: "301 Sunshine Blvd, Orlando FL",
      price: "$2,750.00",
      rooms: "4 Beds • 3 Bath",
      car: "14 min drive",
      agent: { name: "Avery King", photo: "/agent20.png" }
    },
    {
      id: 21,
      image: "/property3.png",
      title: "450 Ocean Breeze, Santa Monica CA",
      price: "$5,500.00",
      rooms: "5 Beds • 4 Bath",
      car: "20 min drive",
      agent: { name: "Harper Wright", photo: "/agent21.png" }
    },
    {
      id: 22,
      image: "/property1.png",
      title: "180 Windmill Road, Las Vegas NV",
      price: "$3,100.00",
      rooms: "3 Beds • 2 Bath",
      car: "18 min drive",
      agent: { name: "Henry Scott", photo: "/agent22.png" }
    },
    {
      id: 23,
      image: "/property1.png",
      title: "1010 Beach Road, Malibu CA",
      price: "$6,000.00",
      rooms: "6 Beds • 5 Bath",
      car: "30 min drive",
      agent: { name: "John Adams", photo: "/agent24.png" }
    },
    {
      id: 24,
      image: "/property2.png",
      title: "500 River Road, Portland OR",
      price: "$2,200.00",
      rooms: "3 Beds • 2 Bath",
      car: "12 min drive",
      agent: { name: "Liam Cooper", photo: "/agent25.png" }
    },
    {
      id: 25,
      image: "/property3.png",
      title: "600 Maple Avenue, Chicago IL",
      price: "$3,000.00",
      rooms: "4 Beds • 3 Bath",
      car: "20 min drive",
      agent: { name: "Emma Phillips", photo: "/agent26.png" }
    },
    {
      id: 26,
      image: "/property1.png",
      title: "750 Forest Street, Denver CO",
      price: "$3,200.00",
      rooms: "5 Beds • 4 Bath",
      car: "18 min drive",
      agent: { name: "David Lee", photo: "/agent27.png" }
    },
    {
      id: 27,
      image: "/property2.png",
      title: "950 Highland Rd, San Francisco CA",
      price: "$3,600.00",
      rooms: "4 Beds • 3 Bath",
      car: "25 min drive",
      agent: { name: "Sophia Turner", photo: "/agent28.png" }
    },
    {
      id: 28,
      image: "/property3.png",
      title: "1100 Pacific Blvd, Los Angeles CA",
      price: "$4,500.00",
      rooms: "5 Beds • 4 Bath",
      car: "15 min drive",
      agent: { name: "William Brown", photo: "/agent29.png" }
    },
    {
      id: 29,
      image: "/property1.png",
      title: "1300 Ocean View Dr, Miami FL",
      price: "$3,800.00",
      rooms: "3 Beds • 2 Bath",
      car: "10 min drive",
      agent: { name: "Grace Clark", photo: "/agent30.png" }
    },
    {
      id: 30,
      image: "/property2.png",
      title: "1400 Sunset Blvd, Los Angeles CA",
      price: "$5,200.00",
      rooms: "4 Beds • 3 Bath",
      car: "20 min drive",
      agent: { name: "Mark Wilson", photo: "/agent31.png" }
    },
    {
      id: 31,
      image: "/property3.png",
      title: "1600 Pine Street, Dallas TX",
      price: "$3,400.00",
      rooms: "4 Beds • 3 Bath",
      car: "18 min drive",
      agent: { name: "Olivia Martin", photo: "/agent32.png" }
    },
    {
      id: 32,
      image: "/property1.png",
      title: "1700 Lakeview Rd, Austin TX",
      price: "$2,950.00",
      rooms: "3 Beds • 2 Bath",
      car: "15 min drive",
      agent: { name: "Benjamin Harris", photo: "/agent33.png" }
    },
    {
      id: 33,
      image: "/property2.png",
      title: "1800 Mountain Lane, Denver CO",
      price: "$3,500.00",
      rooms: "4 Beds • 3 Bath",
      car: "22 min drive",
      agent: { name: "Charlotte Green", photo: "/agent34.png" }
    },
    {
      id: 34,
      image: "/property3.png",
      title: "1900 Sunset Blvd, Miami Beach FL",
      price: "$4,200.00",
      rooms: "5 Beds • 4 Bath",
      car: "15 min drive",
      agent: { name: "Ethan Scott", photo: "/agent35.png" }
    },
    {
      id: 35,
      image: "/property1.png",
      title: "2000 Ocean Blvd, Santa Monica CA",
      price: "$5,500.00",
      rooms: "6 Beds • 5 Bath",
      car: "30 min drive",
      agent: { name: "Lily Davis", photo: "/agent36.png" }
    },
    {
      id: 36,
      image: "/property2.png",
      title: "2100 Riverbend Rd, Seattle WA",
      price: "$2,750.00",
      rooms: "3 Beds • 2 Bath",
      car: "10 min drive",
      agent: { name: "James Wilson", photo: "/agent37.png" }
    }
  ]);

  const [liked, setLiked] = useState([]);
  const [selectedProperty, setSelectedProperty] = useState(null); // Nouvel état pour la propriété sélectionnée
  const navigate = useNavigate();

  const toggleLike = (id) => {
    setLiked((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const goToContact = (agentName) => {
    navigate(`/contact?agent=${agentName}`);
  };

  const showPropertyById = (id) => {
    // Filtrer la propriété en fonction de l'ID
    const property = properties.find((property) => property.id === id);
    setSelectedProperty(property); // Met à jour l'état pour afficher la propriété sélectionnée
  };

  return (
    <section className="latest-properties">
      <h2>Latest Properties of Rent</h2>
      
 

      <div className="properties-grid">
        {/* Afficher soit la propriété sélectionnée soit toutes les propriétés */}
        {(selectedProperty ? [selectedProperty] : properties).map((property) => (
          <div key={property.id} className="property-card">
            <img src={property.image} alt={property.title} />
            <h3>{property.title}</h3>
            <p>{property.rooms}</p>
            <p>{property.price}</p>
            <div className="property-info">
              <div className="car-info">🚗 {property.car}</div>
              <div className="agent-info">
                <img src={property.agent.photo} alt={property.agent.name} />
                <span>{property.agent.name}</span>
              </div>
            </div>
            <div className="property-actions">
              <button onClick={() => toggleLike(property.id)}>
                {liked.includes(property.id) ? "❤️" : "🤍"}
              </button>
              <button onClick={() => alert("Shared!")}>🔗</button>
              <button onClick={() => goToContact(property.agent.name)}>➕</button>
            </div>
          </div>
        ))}
      </div>

      <button className="load-more">Load More Listings</button>
    </section>
  );
}

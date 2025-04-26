import React from "react";

export default function PropertyCarousel() {
  return (
    <section className="property-carousel">
      <h2>Latest Properties of Rent</h2>
      <div className="carousel">
        {/* Images scrollables */}
        <div className="carousel-images">
          <img src="/carousel1.jpg" alt="Property 1" />
          <img src="/carousel2.jpg" alt="Property 2" />
          <img src="/carousel3.jpg" alt="Property 3" />
          <img src="/carousel3.jpg" alt="Property 3" />
<img src="/carousel4.jpg" alt="Property 4" />
<img src="/carousel5.jpg" alt="Property 5" />
<img src="/carousel6.jpg" alt="Property 6" />
<img src="/carousel7.jpg" alt="Property 7" />
<img src="/carousel8.jpg" alt="Property 8" />
<img src="/carousel9.jpg" alt="Property 9" />
<img src="/carousel10.jpg" alt="Property 10" />
<img src="/carousel11.jpg" alt="Property 11" />
<img src="/carousel12.jpg" alt="Property 12" />
<img src="/carousel13.jpg" alt="Property 13" />
<img src="/carousel14.jpg" alt="Property 14" />
<img src="/carousel15.jpg" alt="Property 15" />
<img src="/carousel16.jpg" alt="Property 16" />
<img src="/carousel17.jpg" alt="Property 17" />
<img src="/carousel18.jpg" alt="Property 18" />
<img src="/carousel19.jpg" alt="Property 19" />
<img src="/carousel20.jpg" alt="Property 20" />

        </div>
        {/* Boutons flèches */}
        <div className="carousel-buttons">
          <button>⬅️</button>
          <button>➡️</button>
        </div>
      </div>
    </section>
  );
}

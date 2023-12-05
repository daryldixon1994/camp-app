import React from "react";
import "../style.css"
function CounterSection() {
  return (
    <div className="counter-section-container">
      <div className="counter-section-container-1">
        <h1>Amazing camping for real adventure</h1>
        <p>
          Explore the realm of amazing camping for a true adventure like no
          other. Immerse yourself in the raw beauty of nature and unleash your
          inner explorer. From rugged mountains to serene lakeshores, embark on
          thrilling journeys that will ignite your senses and leave you with
          unforgettable memories.
        </p>
      </div>
      <div className="counter-section-container-2">
        <div className="counter-section-container-2-item">
          <h2>734</h2>
          <p>Tent sites available</p>
        </div>
        <div className="counter-section-container-2-item">
          <h2>542</h2>
          <p>Perfect cabin houses</p>
        </div>
        <div className="counter-section-container-2-item">
          <h2>17</h2>
          <p>Glamp sites*</p>
        </div>
        <div className="counter-section-container-2-item">
          <h2>324</h2>
          <p>Camper sites</p>
        </div>
        <div className="counter-section-container-2-item">
          <h2>126</h2>
          <p>Caravan sites*</p>
        </div>
      </div>
    </div>
  );
}

export default CounterSection;

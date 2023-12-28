import React from "react";
import "../style.css";
function IntroSection() {
  const data = [
    {
      icon: "/assets/intro/icon-tent.svg",
      title: "North african locations",
      text: "Embark on a captivating journey through the enchanting landscapes of Tunisia.",
    },
    {
      icon: "/assets/intro/icon-cottage.svg",
      title: "Top cottages in Tunisia",
      text: "Indulge in luxury and comfort at the best cottages in Tunisia.",
    },
    {
      icon: "/assets/intro/icon-mountains.svg",
      title: "Unforgettable wildlife",
      text: "Immerse yourself in awe-inspiring encounters with extraordinary wildlife.",
    },
    {
      icon: "/assets/intro/icon-barbecue.svg",
      title: "Well equipped",
      text: "Enjoy a fully furnished and modernly equipped accommodation.",
    },
    {
      icon: "/assets/intro/icon-camper.svg",
      title: "Parking in the camp",
      text: "Hassle-free parking facilities for a convenient camping experience.",
    },

    {
      icon: "/assets/intro/icon-trail-map.svg",
      title: "Peaceful hiking",
      text: "Rejuvenate your soul amidst serene landscapes on tranquil hiking trails.",
    },
  ];

  return (
    <div>
      <div className="intro-section-container">
        <h1>Why Choose Us?</h1>
        <img src="/assets/logos/logo-dark.svg" alt="" />
        <p>
          In Kampina, we are committed to providing the best camp experience
          possible. Our experienced staff, top-notch facilities, and exciting
          activities ensure campers’ unforgettable time. From adventure-filled
          days to nights spent under the stars, our camp offers a truly unique
          and enriching experience for all. Choose us for an unforgettable
          adventure!
        </p>
      </div>
      <div className="intro-cards">
        {data.map((elt) => (
          <div className="intro-card">
            <div>
              <img src={elt.icon} alt="" />
            </div>
            <h3> {elt.title} </h3>
            <p> {elt.text} </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IntroSection;

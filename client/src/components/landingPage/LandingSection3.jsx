import React from "react";
import "../style.css";
import Button from "../Button";
import { Link } from "react-router-dom";
function LandingSection3() {
  const data = [
    {
      title: "Tent Camping",
      desc: "Embrace the serenity of nature in our tent camping experience.",
    },
    {
      title: "Family Camping",
      desc: "Create unforgettable memories at our inclusive destination.",
    },
    {
      title: "Trailers and RV spots",
      desc: "Explore the outdoors with our spacious trailer and RV spots.",
    },
    {
      title: "Cabins and glamping",
      desc: "In luxury amidst nature with our comfortable glamping options.",
    },
  ];
  return (
    <div className="land-section-3">
      <div className="land-section-3-1"></div>
      <div className="land-section-3-2">
        <div className="land-section-3-2-1">
          <h3>Change the way you travel!</h3>
          <h1>Have fun with our amazing camping ground</h1>
          <p>
            Experience a remarkable shift in your travel adventures! Unleash the
            joy at our stunning camping ground, where unforgettable memories
            await.
          </p>
        </div>
        <div className="land-section-3-cards">
          {data.map((elt, i) => (
            <div key={i} className="land-section-3-card">
              <h4> {elt.title} </h4>
              <p> {elt.desc} </p>
            </div>
          ))}
        </div>
        <Link to="/camps">
          <Button text="Book now!" color="white" />
        </Link>
      </div>
    </div>
  );
}

export default LandingSection3;

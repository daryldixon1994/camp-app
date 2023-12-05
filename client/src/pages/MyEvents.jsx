import React, { useState, useEffect } from "react";
import PublicNavBar from "../components/PublicNavBar";
import Footer from "../components/Footer";
import "./style.css";
import axios from "axios";
import EventItem from "../components/events/EventItem";
function MyEvents() {
  const [myEvents, setMyEvents] = useState();
  let id = localStorage.getItem("id");
  useEffect(() => {
    axios
      .get(`/camping/api/myCamps?id=${id}`)
      .then((res) => setMyEvents(res.data.data))
      .catch((err) => console.log(err));
  }, [myEvents, id]);
  return (
    <div>
      <PublicNavBar />
      <div className="my-events-list">
        {myEvents &&
          // myEvents.some((elt) => elt.users.includes(localStorage.getItem("id")))
          // ?
          myEvents.map((elt, i) => <EventItem key={i} {...elt} />)}
      </div>
      {/* <div
        style={{
          backgroundImage:
            "url(https://kampina.tigriweb.site/wp-content/uploads/2023/06/ali-kazal-_oP-NFg0qno-unsplash.jpg)",
        }}
        className="about-container hero-container"
      >
        <div className="hero-text">
          <h1>Wilderness Haven Hideaway</h1>
          <p>
            Surrounded by towering trees and rugged landscapes, find solace in
            the simplicity of off-grid living combined with...
          </p>{" "}
        </div>
      </div>
      <div className="camp-container">
        <div
          className="camp-banner"
          style={{
            backgroundImage:
              "url(https://kampina.tigriweb.site/wp-content/uploads/2023/07/jed-villejo-YVpWvuah5aM-unsplash-705x705.jpg.webp)",
          }}
        ></div>
        <div className="camp-intro">
          <div className="camp-intro-head">
            <h1>Overview</h1>
            <div className="event-item-head">
              <ul>
                <li className="i-1">1-3 persons</li>
                <li className="i-2">24m2</li>
                <li>Zone C</li>
              </ul>
            </div>
            <p>
              Indulge in the rustic charm of a cozy log cabin, where evenings
              are spent by the crackling fireplace and mornings greet you with
              awe-inspiring mountain vistas. It’s time to disconnect from the
              world and reconnect with nature. This is where dreams of
              tranquility become reality. With its serene location and stunning
              panoramic views, it offers a perfect retreat for nature
              enthusiasts and adventure seekers. Whether you’re a hiker, a
              wildlife enthusiast, or simply looking to reconnect with nature,
              this campground provides a serene and tranquil escape from the
              hustle and bustle of everyday life. Immerse yourself in the beauty
              of nature, embark on scenic trails, and unwind under the starry
              night sky at Mountain Haven.
            </p>
          </div>
          <div className="camp-intro-details">
            <h1>Details</h1>
          </div>
        </div>
      </div> */}
      <Footer />
    </div>
  );
}

export default MyEvents;

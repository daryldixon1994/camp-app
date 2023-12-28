import React, { useState, useEffect } from "react";
import PublicNavBar from "../components/PublicNavBar";
import "./style.css";
import EventItem from "../components/events/EventItem";
import Footer from "../components/Footer";
import { Form, Icon } from "semantic-ui-react";
import axios from "axios";
function Events() {
  const [campsData, setCampsData] = useState();
  // console.log()
  const [serverError, setServerError] = useState(false);
  const [regionSearch, setRegionSearch] = useState("");
  const [citySearch, setcitySearch] = useState("");
  const [placeSearch, setplaceSearch] = useState("");
  const [dateSearch, setdateSearch] = useState("");
  // let data = [1, 2, 3, 4, 5, 6];
  useEffect(() => {
    axios
      .get("/camping/api/camps")
      .then((res) => {
        // console.log(res.data.data);
        setServerError(false);

        setCampsData(res.data.data);
        // console.log(res.data.data);
      })
      .catch((err) => {
        if (err.response.status === 500) {
          setServerError(true);
        }
        console.dir(err);
      });
  }, [campsData]);
  return (
    <div>
      <PublicNavBar />
      <div
        style={{
          backgroundImage:
            "url(https://kampina.tigriweb.site/wp-content/uploads/2023/06/patrick-hendry-euaPfbR6nC0-unsplash-1536x400.jpg.webp)",
        }}
        className="about-container hero-container"
      >
        <div className="hero-text">
          <h1>Explore our upcoming events</h1>
          <p>
            Discover Our Exciting Range of Campgrounds! Choose the Perfect Spot
            for Your Outdoor Adventure.
          </p>{" "}
        </div>
      </div>
      <div className="search-bar">
        <Form unstackable>
          <Form.Group widths="equal">
            <Form.Input
              size="big"
              icon="search"
              placeholder="Region"
              onChange={(e) => {
                setRegionSearch(e.target.value);
              }}
            />
            <Form.Input
              size="big"
              icon="search"
              placeholder="City"
              onChange={(e) => {
                setcitySearch(e.target.value);
              }}
            />
            <Form.Input
              size="big"
              icon="search"
              placeholder="Place"
              onChange={(e) => {
                setplaceSearch(e.target.value);
              }}
            />
            <Form.Input
              size="big"
              icon="search"
              placeholder="Place"
              type="date"
              onChange={(e) => {
                setdateSearch(e.target.value);
              }}
            />
          </Form.Group>
        </Form>
      </div>
      <div className="events-list">
        {campsData?.length > 0 && !serverError ? (
          // campsData.some((elt) => elt.users.includes(localStorage.getItem("id")))
          // ?
          campsData
            .filter((elt) =>
              regionSearch
                ? elt.region.toLowerCase().includes(regionSearch.toLowerCase())
                : elt
            )
            .filter((elt) =>
              citySearch
                ? elt.city.toLowerCase().includes(citySearch.toLowerCase())
                : elt
            )
            .filter((elt) =>
              placeSearch
                ? elt.place.toLowerCase().includes(placeSearch.toLowerCase())
                : elt
            )
            .filter((elt) => (dateSearch ? elt.date.includes(dateSearch) : elt))
            .map((elt, i) => <EventItem key={i} {...elt} />)
        ) : serverError || campsData?.length === 0 ? (
          <h1>No available data.</h1>
        ) : (
          <div className="camp-list-laoding-container">
            <h1>
              <Icon name="circle notched" loading /> Loading
            </h1>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Events;

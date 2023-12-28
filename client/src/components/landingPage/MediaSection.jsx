import React from "react";
import Button from "../Button";
import "../style.css";
import { Link } from "react-router-dom";
function MediaSection() {
  return (
    <div className="media-section-container">
      <h3>Don’t wait, book your stay now</h3>
      <h1>Escape to nature and create unforgettable memories</h1>
      <Link to="/camps">
        <Button text="Book now!" color="white" />
      </Link>
    </div>
  );
}

export default MediaSection;

import React from "react";
import "../style.css";
import "./style.css";
function Intro({ title, text }) {
  return (
    <div className="intro-section-container">
      <h1 style={{ width: "35%" }}>{title}</h1>
      <div className="line"></div>
      <p>{text}</p>
    </div>
  );
}

export default Intro;

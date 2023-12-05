import React from "react";
import PublicNavBar from "../components/PublicNavBar";
import Intro from "../components/about-us/Intro";
import "./style.css";
import CardSection from "../components/about-us/CardSection";
import AboutFAQ from "../components/about-us/AboutFAQ";
import Footer from "../components/Footer";
import Top from "../components/Top";
function AboutUs() {
  return (
    <div id="top">
      <PublicNavBar />
      <Top />
      <div
        style={{
          backgroundImage: "url(/assets/about/about-bg.png)",
        }}
        className="about-container hero-container"
      >
        <div className="hero-text">
          <h1>
            Experience the <br /> Ultimate Adventure!
          </h1>
          <p>
            Disconnect from the noise of everyday life and reconnect with the
            serenity of nature. Experience the tranquility of camping,
          </p>{" "}
        </div>
      </div>
      <Intro
        title="Discover Our Story"
        text="In our camp, we believe in the power of the great outdoors to inspire, educate, and bring people together. With years of experience in providing quality camp programs for children and adults, we are committed to creating a safe and welcoming environment where campers can learn new skills, make lasting friendships, and create unforgettable memories."
      />
      <div
        className="intro-about-bg"
        style={{ backgroundImage: "url(/assets/about/intro-bg.jpg)" }}
      >
        <div className="intro-about-bg-border"></div>
      </div>
      <Intro
        title="Experience the Magic of Our Camp"
        text="In our camp, we offer an unparalleled outdoor experience for campers of all ages. From our beautiful natural surroundings to our expertly-designed programs, everything we do is aimed at helping our campers learn, grow, and have fun in a safe and supportive environment. Just below, you’ll find a few of the reasons why our camp is the best choice for your next adventure."
      />
      <CardSection />
      <AboutFAQ />
      <Footer />
    </div>
  );
}

export default AboutUs;

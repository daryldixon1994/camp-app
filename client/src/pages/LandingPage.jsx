import React from "react";
import PublicNavBar from "../components/PublicNavBar";
import Hero from "../components/Hero";
import IntroSection from "../components/landingPage/IntroSection";
import LandingSection3 from "../components/landingPage/LandingSection3";
import CounterSection from "../components/landingPage/CounterSection";
import MediaSection from "../components/landingPage/MediaSection";
import LandingReviews from "../components/landingPage/LandingReviews";
import Footer from "../components/Footer";
import Gallery from "../components/landingPage/Gallery";
import "../components/style.css";
import "./style.css";
import Top from "../components/Top";
function LandingPage() {
  return (
    <div id="top">
      <PublicNavBar />
      <Hero />
      <IntroSection />
      <LandingSection3 />
      <CounterSection />
      <MediaSection />
      <LandingReviews />
      <Gallery />
      <Footer />
      <Top />
    </div>
  );
}

export default LandingPage;

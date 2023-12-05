import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Button from "./Button";
function Hero() {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    pauseOnHover: false,
    resetProgress: false,
    height: "618px",
    width: "100%",
  };
  return (
    <Splide aria-label="My Favorite Images" options={options}>
      <SplideSlide
        style={{
          backgroundImage: "url(/assets/hero/slider1.webp)",
          width: "100%",
        }}
        className="hero-container"
      >
        {/* <img src="/assets/hero/slider1.webp" alt="" /> */}

        <div
          className="hero-text"
          style={{
            width: "100%",
          }}
        >
          <h1>
            Experience the <br /> Ultimate Adventure!
          </h1>
          <p>
            Disconnect from the noise of everyday life and reconnect with the
            serenity of nature. Experience the tranquility of camping,
          </p>{" "}
          <Button text="Book now" />
        </div>
      </SplideSlide>
      <SplideSlide
        style={{ backgroundImage: "url(/assets/hero/slider2.webp)" }}
        className="hero-container"
      >
        {/* <img src="/assets/hero/slider2.webp" alt="" /> */}
        <div className="hero-text">
          <h1>Connect with nature!</h1>
          <p>
            Immerse yourself in nature’s beauty and embark on an unforgettable
            camping adventure. Discover breathtaking landscapes, forge lifelong
            friendships, and create cherished memories.
          </p>{" "}
          <Button text="Book your Escape!" color="white" />
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Hero;

import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "../style.css";


function LandingReviews() {
  const options = {
    type: "loop",
    // rewind: true,
    perMove: 1,
    perPage: 3,
    transition: true,
    gap: "1.5em",
  };
  const data = [
    {
      avatar: "/assets/reviews/mark.jpg",
      name: "Mark Roberts",
      occ: "Software Engineer",
      review: ` The camp staff treated us like family, our stay truly special. The
              accommodations were comfortable, and the activities catered to all
              skill levels. Unparalleled hospitality.`,
    },
    {
      avatar: "/assets/reviews/john.jpg",
      name: "John Smith",
      occ: "Marketing Executive",
      review: ` The staff was incredibly helpful and friendly. The facilities were
              top-notch, and the location was breathtaking. Highly recommended
              for outdoor enthusiasts. Amazing experience.`,
    },
    {
      avatar: "/assets/reviews/sarah.jpg",
      name: "Sarah Johnson",
      occ: "Teacher",
      review: ` The campsite exceeded all expectations. The activities were
              thrilling, the atmosphere was electric. A must-visit for nature
              lovers. Unforgettable adventure.`,
    },
    {
      avatar: "/assets/reviews/david.jpg",
      name: "David Thompson",
      occ: "Photographer",
      review: `The campgrounds were pristine, offering stunning views at every
              turn. The staff went above and beyond to ensure a memorable stay.
              Can’t wait to return. Paradise found.`,
    },
    {
      avatar: "/assets/reviews/emily.jpg",
      name: "Emily Wilson",
      occ: "Stay-at-home-mom",
      review: ` We had a fantastic time bonding over campfires, hiking trails, and
              starry nights. The campsite provided a safe and enjoyable
              experience for all ages. Perfect family getaway.`,
    },
  ];
  return (
    <div className="review-container">
      <Splide
        hasTrack={false}
        aria-label="Custom Arrows"
        options={options}
        className="slides-container"
      >
        <div className="splide__arrows btns">
          <button
            type="button"
            style={{ backgroundColor: "white", border: "1px #dfdfdf solid" }}
            className="splide__arrow  splide__arrow--prev"
            id="btn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 35 35"
              width="35"
              height="35"
              focusable="false"
            >
              <path
                d="M34.633,20.885L23.384,32.134C23.14,32.378,22.82,32.5,22.5,32.5s-0.64-0.122-0.884-0.366c-0.488-0.488-0.488-1.279,0-1.768l9.116-9.116H6.25C5.56,21.25,5,20.69,5,20s0.56-1.25,1.25-1.25h24.482l-9.116-9.116c-0.488-0.488-0.488-1.279,0-1.768s1.279-0.488,1.768,0l11.249,11.249c0.116,0.115,0.207,0.254,0.271,0.407c0.126,0.305,0.126,0.649,0,0.955C34.84,20.631,34.749,20.769,34.633,20.885z"
                fill="#e9b237"
              ></path>
            </svg>
            {/* <FaArrowCircleRight color="orange" size={100} /> */}
            {/* Prev */}
          </button>
          <button
            type="button"
            style={{ backgroundColor: "white", border: "1px #dfdfdf solid" }}
            id="btn"
            className="splide__arrow splide__arrow--next"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 40 40"
              width="100"
              height="100"
              focusable="false"
              color="orange"
            >
              <path
                d="M34.633,20.885L23.384,32.134C23.14,32.378,22.82,32.5,22.5,32.5s-0.64-0.122-0.884-0.366c-0.488-0.488-0.488-1.279,0-1.768l9.116-9.116H6.25C5.56,21.25,5,20.69,5,20s0.56-1.25,1.25-1.25h24.482l-9.116-9.116c-0.488-0.488-0.488-1.279,0-1.768s1.279-0.488,1.768,0l11.249,11.249c0.116,0.115,0.207,0.254,0.271,0.407c0.126,0.305,0.126,0.649,0,0.955C34.84,20.631,34.749,20.769,34.633,20.885z"
                fill="#e9b237"
              ></path>
            </svg>
          </button>
        </div>
        <h1>What our clients say about us</h1>
        <SplideTrack>
          {data.map((elt) => (
            <SplideSlide className="slide">
              <div>
                <div>
                  <img src="/assets/reviews/quote.png" alt="" width="80px" />
                </div>
                <p>{elt.review}</p>
              </div>
              <div className="user-review-bloc">
                <div>
                  <img src={elt.avatar} width="100px" alt="" />
                </div>
                <div>
                  <h5>{elt.name}</h5>
                  <h6>{elt.occ}</h6>
                </div>
              </div>
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </div>
  );
}
export default LandingReviews;

import React from "react";
import "./style.css";
import "../style.css";
function CardSection() {
  const data = [
    {
      icon: "/assets/about/icon13.svg",
      title: "Expert Staff",
      text: "Our team of experienced and passionate staff are dedicated to creating an unforgettable camp experience for every camper. From our counselors to our program directors, every member of our team is committed to ensuring that our campers have the time of their lives.",
    },
    {
      icon: "/assets/about/icon2.svg",
      title: "Beautiful Location",
      text: `Nestled in the heart of the countryside, our camp offers stunning natural surroundings that are perfect for exploring and enjoying. Whether you want to hike through the woods, swim in the lake, or just relax and soak up the scenery, our camp has it all.

`,
    },
    {
      icon: "/assets/about/icon3.svg",
      title: "Exciting Activities",
      text: "From traditional camp activities like canoeing and archery to more modern pursuits like robotics and coding, our camp offers a wide range of activities that cater to every interest and skill level.",
    },
    {
      icon: "/assets/about/icon4.svg",
      title: "Community Spirit",
      text: "In our camp, we believe that the sense of community is just as important as the activities we offer. That’s why we place a strong emphasis on building relationships, fostering teamwork, and encouraging campers to support and encourage one another.",
    },
    {
      icon: "/assets/about/icon5.svg",
      title: "Wild Camp Life",
      text: "Experience the raw essence of camping as you embrace the untamed wilderness. Roast marshmallows over a crackling fire, sleep under a canopy of stars, and revel in the freedom of wild camp life. There’s something for everyone to enjoy and make lasting memories.",
    },

    {
      icon: "/assets/about/icon6.svg",
      title: "Closer To Nature",
      text: "Escape the hustle and bustle of city life and reconnect with the natural world. Immerse yourself in the soothing sounds of chirping birds, rustling leaves, and flowing rivers – a true retreat to nature’s embrace.",
    },
  ];

  return (
    <div className="intro-cards">
      {data.map((elt) => (
        <div className=" intro-card-about">
          <div>
            <img src={elt.icon} alt="" />
          </div>
          <h3> {elt.title} </h3>
          <p> {elt.text} </p>
        </div>
      ))}
    </div>
  );
}

export default CardSection;

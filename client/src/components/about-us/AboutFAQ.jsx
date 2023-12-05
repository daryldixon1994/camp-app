import React from "react";
import "./style.css";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
function AboutFAQ() {
  let items = [
    {
      heading: "What types of activities do you offer at camp?",
      content:
        "Experience a variety of activities at our camp, from thrilling outdoor adventures to creative workshops. There’s something for everyone to enjoy and make lasting memories.",
    },
    {
      heading: "What kind of food do you serve at camp?",
      content:
        "Indulge in delicious and nourishing meals at our camp. Our menu caters to different dietary preferences, offering a range of flavors and dishes to satisfy your appetite.",
    },
    {
      heading: "What kind of accommodations do you offer?",
      content:
        "Choose from comfortable accommodations that blend with nature. We offer cozy cabins, spacious tents, and rustic lodges, ensuring a relaxing and memorable stay.",
    },
    {
      heading: "What is your policy on internet use at camp?",
      content:
        "Disconnect from screens and embrace the camp experience. While limited internet access is available, we encourage campers to immerse themselves in nature and connect with others.",
    },
  ];
  return (
    <div className="about-faq">
      <h1>Frequently Asked Questions</h1>
      <div className="about-faq-content">
        <div
          className="about-faq-bg"
          style={{ backgroundImage: "url(/assets/about/faq-bg.webp)" }}
        >
          <img src="/assets/about/dots.png" alt="" />
          <div className="orange-container"></div>
        </div>
        <div className="about-faq-section">
          <p>
            Find answers to common queries about our camp below. Learn about the
            activities we offer, the food we serve, our accommodations, and our
            policy on internet use. Have any more questions? Don’t hesitate to
            reach out to our friendly team for further assistance.
          </p>
          <div className="about-accordion">
            <Accordion allowZeroExpanded>
              {items.map((item) => (
                <AccordionItem key={item.uuid}>
                  <AccordionItemHeading>
                    <AccordionItemButton>{item.heading}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>{item.content}</AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutFAQ;

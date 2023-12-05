import "./style.css";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-desc">
        <img src="/assets/footer/footer-logo.svg" alt="" width="250px" />
        <p>
          In Kampina, we pride ourselves on creating a unique and immersive
          outdoor adventure for nature enthusiasts of all ages. Our team of
          passionate experts is dedicated to providing exceptional services and
          ensuring that every camper's needs are met with utmost care.
        </p>
        <div className="footer-social">
          <FaFacebook size={40} style={{ cursor: "pointer" }} />
          <FaYoutube size={40} style={{ cursor: "pointer" }} />
          <IoLogoWhatsapp size={40} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <p className="rigths">© 2023 | Kampina | All Rights Reserved</p>
    </div>
  );
}

export default Footer;

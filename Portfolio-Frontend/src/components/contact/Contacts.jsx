import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Contacts.css";

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="contacts-container" data-aos="fade-in">
      <div className="contact-item">
        <a
          href="https://github.com/rymbowman"
          target="_blank"
          rel="noopener noreferrer"
          id="github"
          className="contact-link"
        >
          <i className={"bx bxl-github contact-img"}></i>
          <p className="contact-tooltip">Github</p>
        </a>
      </div>
      <div className="contact-item">
        <a
          href="https://www.linkedin.com/in/ryanbowman24"
          target="_blank"
          rel="noopener noreferrer"
          id="LinkedIn"
          className="contact-link"
        >
          <i className={"bx bxl-linkedin-square contact-img"}></i>
          <p className="contact-tooltip">LinkedIn</p>
        </a>
      </div>
      <div className="contact-item">
        <Link to="/connect" id="email" className="contact-link">
          <i className={"bx bx-envelope contact-img"}></i>
          <p className="contact-tooltip">Email</p>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;

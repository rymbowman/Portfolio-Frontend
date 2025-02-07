import { Link } from "react-router-dom";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contact-methods">
      <div className="contact-container">
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
      <div className="contact-container">
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
      <div className="contact-container">
        <Link to="/connect" id="email" className="contact-link">
          <i className={"bx bx-envelope contact-img"}></i>
          <p className="contact-tooltip">Email</p>
        </Link>
      </div>
    </div>
  );
};

export default Contacts;

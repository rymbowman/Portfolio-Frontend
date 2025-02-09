import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const HeaderBio = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="bio-container" data-aos="fade-in">
      <p className="career-field">Web Developer</p>
      <p className="bio-content">
        Committed to continuously improving my skills in the field of web
        development to design beautifully functioning websites and applications
        that solve real-world business needs.
      </p>
    </div>
  );
};

export default HeaderBio;

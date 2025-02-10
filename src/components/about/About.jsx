import { useEffect } from "react";
import AboutIntro from "./AboutIntro";
import AboutText from "./AboutText";
import Slideshow from "./Slideshow";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="about-container">
      <AboutIntro />
      <div className="about-body" data-aos="fade-in">
        <AboutText />
        <Slideshow />
      </div>
    </div>
  );
};

export default About;

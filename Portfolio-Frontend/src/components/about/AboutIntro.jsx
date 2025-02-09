import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./About.css";

const AboutIntro = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="about-intro" data-aos="fade-in">
      <p>
        Thanks for visiting! Trust is key to any relationship, so here is a bit
        about me...
      </p>
    </div>
  );
};

export default AboutIntro;

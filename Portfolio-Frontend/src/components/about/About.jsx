import AboutIntro from "./AboutIntro";
import "./About.css";
import AboutText from "./AboutText";
import Slideshow from "./Slideshow";

const About = () => {
  return (
    <div className="about-container">
      <AboutIntro />
      <AboutText />
      <Slideshow />
    </div>
  );
};

export default About;

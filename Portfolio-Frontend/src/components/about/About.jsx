import AboutIntro from "./AboutIntro";
import "./About.css";
import AboutText from "./AboutText";
import Slideshow from "./Slideshow";

const About = () => {
  return (
    <div className="about-container">
      <AboutIntro />
      <div className="about-body">
        <AboutText />
        <Slideshow />
      </div>
    </div>
  );
};

export default About;

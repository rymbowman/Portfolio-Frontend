import About from "../../components/about/About";
import Contacts from "../../components/contact/Contacts";
import HeaderBio from "../../components/header/HeaderBio";
import HeaderGreeting from "../../components/header/HeaderGreeting";
import Projects from "../../components/projects/Projects";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeaderGreeting />;
      <HeaderBio />;
      <About />;
      <Projects />
      <Contacts />
    </div>
  );
};

export default Homepage;

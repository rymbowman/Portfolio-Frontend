import About from "../../components/about/About";
import HeaderBio from "../../components/header/HeaderBio";
import HeaderGreeting from "../../components/header/HeaderGreeting";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeaderGreeting />;
      <HeaderBio />;
      <About />;
    </div>
  );
};

export default Homepage;

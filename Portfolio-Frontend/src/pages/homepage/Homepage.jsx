import HeaderBio from "../../components/header/HeaderBio";
import HeaderGreeting from "../../components/header/HeaderGreeting";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <HeaderGreeting />;
      <HeaderBio />;
    </div>
  );
};

export default Homepage;

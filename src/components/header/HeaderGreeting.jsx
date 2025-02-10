import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Header.css";

const HeaderGreeting = () => {
  useEffect(() => {
    AOS.init({ duration: 2500 });
  }, []);
  return (
    <div className="intro-container" data-aos="fade-in">
      <p className="header-title" id="greeting">
        Hello, my name is
      </p>
      <h1 className="header-title" id="name">
        Ryan Bowman.
      </h1>
    </div>
  );
};

export default HeaderGreeting;

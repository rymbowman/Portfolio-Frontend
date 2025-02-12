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
      <p className="career-field">Javascript Engineer</p>
      <p className="bio-content">
        Aspiring full-stack JS engineer skilled in React, JavaScript, Node.js,
        Express, CSS, HTML, and PostgreSQL. Leveraging experience as a former
        high school teacher and basketball coach to bring strong leadership and
        teamwork skills. Committed to building dynamic web applications and
        continuously learning the latest industry trends.
      </p>
    </div>
  );
};

export default HeaderBio;

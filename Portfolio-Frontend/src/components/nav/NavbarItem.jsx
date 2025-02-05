import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Navbar.css";

const NavbarItem = ({ link, target = "_self", iconImage, tooltip }) => {
  return (
    <div className="nav-item">
      <Link
        to={link}
        target={target}
        rel={target === "blank" ? "noopener noreferer" : "undefined"}
      >
        <i className={iconImage}></i>
        <p className="nav-tooltip" onClick={(e) => e.preventDefault()}>
          {tooltip}
        </p>
      </Link>
    </div>
  );
};

NavbarItem.propTypes = {
  link: PropTypes.string,
  target: PropTypes.string,
  iconImage: PropTypes.string,
  tooltip: PropTypes.string,
};
export default NavbarItem;

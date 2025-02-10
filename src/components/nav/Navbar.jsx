import "./Navbar.css";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className="navbar">
      <NavbarItem link={"/"} iconImage={"bx bx-home-alt-2"} tooltip={"Home"} />
      <NavbarItem
        link={"https://rymbowman.github.io/Resume/"}
        target="_blank"
        iconImage={"bx bx-file"}
        tooltip={"Resume"}
      />
      <NavbarItem
        link={"/connect"}
        iconImage={"bx bx-conversation"}
        tooltip={"Connect"}
      />
    </div>
  );
};

export default Navbar;

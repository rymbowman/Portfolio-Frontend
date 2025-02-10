import { Outlet } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
const Mainlayout = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Mainlayout;

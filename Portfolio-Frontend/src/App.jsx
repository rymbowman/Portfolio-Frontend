import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import Connectpage from "./pages/connectpage/Connectpage";
import Mainlayout from "./layouts/Mainlayout";

function App() {
  return (
    <Router>
      <Mainlayout>
        <Routes>
          <Route path="/" Component={<Homepage />} />
          <Route path="/contact" Component={<Connectpage />} />
        </Routes>
      </Mainlayout>
    </Router>
  );
}

export default App;

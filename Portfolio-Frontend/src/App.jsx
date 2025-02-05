import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import Connectpage from "./pages/connectpage/Connectpage";
import Mainlayout from "./layouts/Mainlayout";

function App() {
  return (
    <Router>
      <Mainlayout>
        <Switch>
          <Route path="/" Component={<Homepage />} />
          <Route path="/contact" Component={<Connectpage />} />
        </Switch>
      </Mainlayout>
    </Router>
  );
}

export default App;

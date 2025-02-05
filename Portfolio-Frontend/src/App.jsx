import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import Connectpage from "./pages/connectpage/Connectpage";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" Component={<Homepage />} />
        <Route path="/contact" Component={<Connectpage />} />
      </Switch>
    </Router>
  );
}

export default App;

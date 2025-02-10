import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./layouts/mainlayout/Mainlayout.jsx";
import Homepage from "./pages/homepage/Homepage.jsx";
import Connectpage from "./pages/connectpage/Connectpage.jsx";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/connect" element={<Connectpage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

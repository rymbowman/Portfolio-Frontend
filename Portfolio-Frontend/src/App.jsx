import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Homepage from "./pages/homepage/HomePage";
import Connectpage from "./pages/connectpage/Connectpage";
import Mainlayout from "./layouts/Mainlayout";
import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Mainlayout />}>
      <Route index element={<Homepage />} />
      <Route path="/contact" element={<Connectpage />} />
    </Route>
  )
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;

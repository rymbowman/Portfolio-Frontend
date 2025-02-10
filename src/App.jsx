import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Mainlayout from "./layouts/Mainlayout";
import Homepage from "./pages/homepage/Homepage";
import Connectpage from "./pages/connectpage/Connectpage";
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

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import VirtualLab from "./pages/VirtualLab.jsx";
import Assistant from "./pages/Assistant.jsx";

import Navbar from "./components/Navbar.jsx";

function App() {

  return (

    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/lab"
          element={<VirtualLab />}
        />

        <Route
          path="/assistant"
          element={<Assistant />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home.jsx";
import VirtualLab from "./pages/virtuallab.jsx";
import Assistant from "./pages/assistant.jsx";

import Navbar from "./components/navbar.jsx";

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
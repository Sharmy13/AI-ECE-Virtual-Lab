import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import VirtualLab from "./pages/VirtualLab";
import Assistant from "./pages/Assistant";

import Navbar from "./components/Navbar";

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
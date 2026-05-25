import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Home";
import VirtualLab from "./VirtualLab";
import Assistant from "./Assistant";
import Navbar from "./Navbar";
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
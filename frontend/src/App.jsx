import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Assistant from "./pages/Assistant";
import Navbar from "./components/Navbar";
import VirtualLab from "./pages/VirtualLab";
function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assistant" element={<Assistant />} />
        <Route path="/lab" element={<VirtualLab />} />
      </Routes>
    </div>
  );
}

export default App;
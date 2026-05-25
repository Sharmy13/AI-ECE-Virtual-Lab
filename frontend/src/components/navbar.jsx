import { Link } from "react-router-dom";

function Navbar() {

  return (

    <nav className="sticky top-0 z-50 bg-[#0b0f19]/95 border-b border-gray-800">

      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-5">

        {/* LOGO */}

        <Link to="/">

          <h1 className="text-3xl font-bold text-white tracking-wide">

            AI ECE Lab

          </h1>

        </Link>

        {/* NAV LINKS */}

        <div className="flex gap-8 text-[17px] font-medium text-gray-300">

          <Link
            to="/"
            className="hover:text-white transition duration-200"
          >
            Home
          </Link>
        <Link
            to="/lab"
            className="hover:text-white transition duration-200"
          >
            Virtual Lab
          </Link>
          

        <Link
            to="/assistant"
            className="hover:text-white transition duration-200"
          >
            AI Assistant
          </Link>
          

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
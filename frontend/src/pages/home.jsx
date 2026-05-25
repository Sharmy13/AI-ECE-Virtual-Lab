import { Link } from "react-router-dom";

function Home() {

  return (

    <div className="min-h-screen bg-[#0b0f19] text-white">

      {/* HERO SECTION */}

      <div className="flex flex-col items-center justify-center text-center min-h-[85vh] px-6">

        <h1 className="text-6xl md:text-7xl font-extrabold leading-tight">

          AI-Powered ECE
          <br />
          Virtual Lab

        </h1>

        <p className="mt-8 text-xl text-gray-400 max-w-3xl leading-9">

          Build electronics circuits, simulate experiments,
          analyze waveforms, and interact with an AI-powered
          electronics mentor for smarter engineering learning.

        </p>

        {/* BUTTONS */}

        <div className="flex gap-6 mt-10 flex-wrap justify-center">

          <Link to="/lab">

            <button className="bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-2xl text-lg font-semibold transition duration-200">

              Open Virtual Lab

            </button>

          </Link>

          <Link to="/assistant">

            <button className="border border-gray-700 hover:border-white hover:text-white px-8 py-4 rounded-2xl text-lg font-semibold text-gray-300 transition duration-200">

              Try AI Assistant

            </button>

          </Link>

        </div>

      </div>

      {/* FEATURES SECTION */}

      <div className="max-w-7xl mx-auto px-6 pb-20">

        <h2 className="text-4xl font-bold text-center text-white mb-14">

          Platform Features

        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition duration-300">

            <h3 className="text-2xl font-bold mb-4">
              🤖 AI Mentor
            </h3>

            <p className="text-gray-400 leading-7">
              Ask electronics doubts and get intelligent
              explanations from the AI assistant.
            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition duration-300">

            <h3 className="text-2xl font-bold mb-4">
              ⚡ Circuit Simulation
            </h3>

            <p className="text-gray-400 leading-7">
              Build and test electronics circuits directly
              inside the virtual laboratory.
            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition duration-300">

            <h3 className="text-2xl font-bold mb-4">
              📈 Waveform Analysis
            </h3>

            <p className="text-gray-400 leading-7">
              Analyze waveforms and observe signal behavior
              using interactive visualizations.
            </p>

          </div>

          <div className="bg-[#111827] border border-gray-800 p-6 rounded-2xl hover:border-gray-600 transition duration-300">

            <h3 className="text-2xl font-bold mb-4">
              📄 Smart Reports
            </h3>

            <p className="text-gray-400 leading-7">
              Generate AI-powered lab reports and viva
              questions automatically.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Home;
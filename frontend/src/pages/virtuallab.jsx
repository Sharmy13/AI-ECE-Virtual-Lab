import Assistant from "./assistant";

function VirtualLab() {

  return (

    <div className="h-screen bg-[#0b0f19] text-white flex overflow-hidden">

      {/* SIMULATOR */}

      <div className="w-[70%] bg-black">

        <iframe
          src="https://www.falstad.com/circuit/circuitjs.html"
          width="100%"
          height="100%"
          title="Virtual Electronics Lab"
        />

      </div>

      {/* AI PANEL */}

      <div className="w-[30%] bg-[#111827] border-l border-gray-800 flex flex-col">

        {/* HEADER */}

        <div className="px-6 py-5 border-b border-gray-800">

          <h2 className="text-2xl font-bold">
            AI Assistant
          </h2>

          <p className="text-gray-400 text-sm mt-2">

            Ask doubts about circuits,
            waveforms, and electronics concepts.

          </p>

        </div>

        {/* ASSISTANT */}

        <div className="flex-1 overflow-y-auto p-4">

          <Assistant />

        </div>

      </div>

    </div>
  );
}

export default VirtualLab;
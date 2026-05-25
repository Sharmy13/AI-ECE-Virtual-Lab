import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

import {
  Line
} from "react-chartjs-2";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
);

function RCFilter() {

  // STATES

  const [frequency, setFrequency] =
    useState(100);

  const [aiExplanation, setAiExplanation] =
    useState("");

  const [report, setReport] =
    useState("");

  const [vivaQuestions, setVivaQuestions] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  // AI EXPLANATION

  const explainExperiment = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/ask-ai",
        {
          question:
            "Explain RC Low Pass Filter in simple engineering terms with formula, working principle and applications.",
        }
      );

      setAiExplanation(response.data.reply);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  // AI REPORT GENERATOR

  const generateReport = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/ask-ai",
        {
          question:
            "Generate a detailed RC Low Pass Filter lab report including aim, apparatus required, theory, circuit description, observations, result, precautions and applications.",
        }
      );

      setReport(response.data.reply);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  // AI VIVA QUESTIONS

  const generateViva = async () => {

    try {

      setLoading(true);

      const response = await axios.post(
        "http://localhost:8080/ask-ai",
        {
          question:
            "Generate 10 viva questions with answers for RC Low Pass Filter experiment.",
        }
      );

      setVivaQuestions(response.data.reply);

      setLoading(false);

    } catch (error) {

      console.log(error);

      setLoading(false);
    }
  };

  // PDF DOWNLOAD

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "RC Low Pass Filter Lab Report",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      report || "No report generated",
      20,
      40,
      {
        maxWidth: 170,
      }
    );

    doc.save("RC_Filter_Report.pdf");
  };

  // GRAPH DATA

  const labels = [];

  const gainData = [];

  for (let f = 10; f <= 1000; f += 50) {

    labels.push(f);

    const gain =
      1 / Math.sqrt(1 + Math.pow(f / frequency, 2));

    gainData.push(gain);
  }

  const data = {

    labels,

    datasets: [
      {
        label: "RC Filter Gain",
        data: gainData,
        borderColor: "cyan",
        backgroundColor: "cyan",
        tension: 0.4,
      },
    ],
  };

  // JSX UI

  return (

    <div className="min-h-screen bg-gray-950 text-white p-10">

      {/* TITLE */}

      <h1 className="text-5xl font-bold text-cyan-400 mb-4">
        RC Low Pass Filter Virtual Lab
      </h1>

      <p className="text-gray-300 max-w-4xl mb-10 text-lg">
        This AI-powered virtual experiment demonstrates
        the behavior of an RC Low Pass Filter. Students
        can visualize frequency response, generate AI
        explanations, viva questions, and lab reports.
      </p>

      {/* FORMULA */}

      <div className="bg-gray-900 p-6 rounded-2xl mb-8 border border-cyan-500">

        <h2 className="text-2xl font-bold text-cyan-300 mb-4">
          Cutoff Frequency Formula
        </h2>

        <p className="text-2xl text-white">
          fc = 1 / (2πRC)
        </p>

      </div>

      {/* FREQUENCY CONTROL */}

      <div className="bg-gray-900 p-6 rounded-2xl mb-8 border border-cyan-500">

        <label className="text-2xl font-semibold">
          Cutoff Frequency: {frequency} Hz
        </label>

        <input
          type="range"
          min="50"
          max="1000"
          value={frequency}
          onChange={(e) =>
            setFrequency(e.target.value)
          }
          className="w-full mt-6"
        />

      </div>

      {/* BUTTONS */}

      <div className="flex flex-wrap gap-4 mb-10">

        <button
          onClick={explainExperiment}
          className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-bold"
        >
          Explain Experiment
        </button>

        <button
          onClick={generateReport}
          className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-bold"
        >
          Generate Report
        </button>

        <button
          onClick={generateViva}
          className="bg-purple-500 hover:bg-purple-600 px-6 py-3 rounded-xl font-bold"
        >
          Generate Viva
        </button>

        <button
          onClick={downloadPDF}
          className="bg-red-500 hover:bg-red-600 px-6 py-3 rounded-xl font-bold"
        >
          Download PDF
        </button>

      </div>

      {/* LOADING */}

      {
        loading && (

          <div className="bg-yellow-500 text-black p-4 rounded-xl mb-8 font-bold">
            AI Processing...
          </div>
        )
      }

      {/* GRAPH */}

      <div className="bg-gray-900 p-6 rounded-2xl border border-cyan-500">

        <h2 className="text-2xl font-bold text-cyan-300 mb-6">
          Frequency Response Graph
        </h2>

        <Line data={data} />

      </div>

      {/* AI EXPLANATION */}

      {
        aiExplanation && (

          <div className="bg-gray-900 p-6 rounded-2xl mt-10 border border-cyan-500">

            <h2 className="text-3xl font-bold text-cyan-300 mb-6">
              AI Explanation
            </h2>

            <p className="whitespace-pre-wrap text-gray-300 leading-8">
              {aiExplanation}
            </p>

          </div>
        )
      }

      {/* LAB REPORT */}

      {
        report && (

          <div className="bg-gray-900 p-6 rounded-2xl mt-10 border border-green-500">

            <h2 className="text-3xl font-bold text-green-400 mb-6">
              AI Lab Report
            </h2>

            <p className="whitespace-pre-wrap text-gray-300 leading-8">
              {report}
            </p>

          </div>
        )
      }

      {/* VIVA QUESTIONS */}

      {
        vivaQuestions && (

          <div className="bg-gray-900 p-6 rounded-2xl mt-10 border border-purple-500">

            <h2 className="text-3xl font-bold text-purple-400 mb-6">
              Viva Questions
            </h2>

            <p className="whitespace-pre-wrap text-gray-300 leading-8">
              {vivaQuestions}
            </p>

          </div>
        )
      }

    </div>
  );
}

export default RCFilter;
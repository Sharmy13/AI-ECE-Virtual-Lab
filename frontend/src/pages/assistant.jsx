import { useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";

function Assistant() {

  // STATES

  const [question, setQuestion] =
    useState("");

  const [answer, setAnswer] =
    useState("");

  const [experimentName, setExperimentName] =
    useState("");

  const [report, setReport] =
    useState("");

  const [viva, setViva] =
    useState("");

  // ASK AI

  const askAI = async () => {

    try {

      const response = await axios.post(
        "https://ai-ece-virtual-lab.onrender.com/ask-ai",
        {
          question: `
Current Lab Context:
The student is working inside a virtual electronics laboratory simulator.

Student Question:
${question}
`,
        }
      );

      setAnswer(response.data.reply);

    } catch (error) {

      console.log(error);
    }
  };

  // SMART REPORT GENERATOR

  const generateReport = async () => {

    try {

      const response = await axios.post(
        "https://ai-ece-virtual-lab.onrender.com/ask-ai",
        {
          question: `
Generate a professional electronics lab report for:

${experimentName}

Include:
- Aim
- Components Required
- Theory
- Procedure
- Observations
- Result
- Applications
- Precautions
`,
        }
      );

      setReport(response.data.reply);

    } catch (error) {

      console.log(error);
    }
  };

  // SMART VIVA GENERATOR

  const generateViva = async () => {

    try {

      const response = await axios.post(
        "https://ai-ece-virtual-lab.onrender.com/ask-ai",
        {
          question: `
Generate 10 viva questions with answers for:

${experimentName}

Keep answers simple and educational.
`,
        }
      );

      setViva(response.data.reply);

    } catch (error) {

      console.log(error);
    }
  };

  // DOWNLOAD PDF

  const downloadPDF = () => {

    const doc = new jsPDF();

    doc.setFontSize(20);

    doc.text(
      "Electronics Lab Report",
      20,
      20
    );

    doc.setFontSize(12);

    doc.text(
      report || "No Report Generated",
      20,
      40,
      {
        maxWidth: 170,
      }
    );

    doc.save("Lab_Report.pdf");
  };

  return (

    <div className="text-white">

      {/* TITLE */}

      <h1 className="text-3xl font-bold mb-6">
        AI Assistant
      </h1>

      {/* EXPERIMENT NAME */}

      <input
        type="text"
        placeholder="Enter Experiment Name..."
        value={experimentName}
        onChange={(e) =>
          setExperimentName(e.target.value)
        }
        className="w-full bg-black border border-gray-700 rounded-xl p-4 mb-4 text-white"
      />

      {/* QUESTION BOX */}

      <textarea
        className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
        rows="5"
        placeholder="Ask any electronics question..."
        value={question}
        onChange={(e) =>
          setQuestion(e.target.value)
        }
      />

      {/* BUTTONS */}

      <div className="flex gap-4 mt-5 flex-wrap">

        <button
          onClick={askAI}
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold transition duration-200"
        >
          Ask AI
        </button>

        <button
          onClick={generateReport}
          className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition duration-200"
        >
          Generate Report
        </button>

        <button
          onClick={generateViva}
          className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-xl font-semibold transition duration-200"
        >
          Generate Viva
        </button>

        <button
          onClick={downloadPDF}
          className="bg-white text-black hover:bg-gray-200 px-6 py-3 rounded-xl font-semibold transition duration-200"
        >
          Download PDF
        </button>

      </div>

      {/* AI RESPONSE */}

      {
        answer && (

          <div className="mt-8 bg-black border border-gray-800 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-4">
              AI Response
            </h2>

            <p className="whitespace-pre-wrap text-gray-300 leading-8">

              {answer}

            </p>

          </div>
        )
      }

      {/* REPORT */}

      {
        report && (

          <div className="mt-8 bg-black border border-gray-800 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-4">
              Smart Lab Report
            </h2>

            <p className="whitespace-pre-wrap text-gray-300 leading-8">

              {report}

            </p>

          </div>
        )
      }

      {/* VIVA */}

      {
        viva && (

          <div className="mt-8 bg-black border border-gray-800 p-6 rounded-2xl">

            <h2 className="text-2xl font-bold mb-4">
              Viva Questions
            </h2>

            <p className="whitespace-pre-wrap text-gray-300 leading-8">

              {viva}

            </p>

          </div>
        )
      }

    </div>
  );
}

export default Assistant;
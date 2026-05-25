const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } =
  require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

// GEMINI SETUP

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

// TEST ROUTE

app.get("/", (req, res) => {

  res.send("Backend Running");
});

// AI ROUTE

app.post("/ask-ai", async (req, res) => {

  try {

    console.log("BODY:");
    console.log(req.body);

    const { question } = req.body;

    // CHECK QUESTION

    if (!question) {

      return res.status(400).json({
        error: "Question is required",
      });
    }

    // MODEL

    const model =
      genAI.getGenerativeModel({
        model: "gemini-2.0-flash",
      });

    // PROMPT

    const prompt = `
You are an AI Electronics Lab Assistant.

Help students understand:
- circuit connections
- waveform analysis
- filters
- amplifiers
- op-amps
- communication systems
- digital electronics

Explain clearly in simple educational style.

Student Question:
${question}
`;

    // GEMINI RESPONSE

    const result =
      await model.generateContent(prompt);

    const response =
      await result.response;

    const text =
      response.text();

    // SEND RESPONSE

    res.json({
      reply: text,
    });

  } catch (error) {

    console.log("FULL ERROR:");
    console.log(error);

    res.status(500).json({
      error: error.message,
    });
  }
});

// SERVER

const PORT =
  process.env.PORT || 8080;

app.listen(PORT, () => {

  console.log(
    `Server running on port ${PORT}`
  );
});
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY
);

app.get("/", (req, res) => {
  res.send("Backend Running");
});

app.post("/ask-ai", async (req, res) => {

  try {

    const { question } = req.body;

    console.log(question);

    const model = genAI.getGenerativeModel({
      model: "gemini-flash-latest"
    });

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

Do NOT give very short answers.
Explain clearly in educational style.

Student Question:
${question}
`;

const result =
  await model.generateContent(prompt);
    const response = await result.response;

    const text = response.text();

    res.json({
      reply: text
    });

  } catch (error) {

    console.log("ERROR:");
    console.log(error);

    res.status(500).json({
      error: "Gemini failed"
    });
  }
});

app.listen(8080, () => {
  console.log("Server running on 8080");
});
// import { OpenAI } from "openai";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json({ limit: "5mb" }));

// const openai = new OpenAI({
//   apiKey: process.env.OPENAI_API_KEY 
// });
app.get("/", (req, res) => {
  res.send("🧠 SyncedIn Resume AI server (DeepSeek) is running!");
});

app.post("/api/resume-feedback", async (req, res) => {
  const { resumeText, fileName } = req.body;

  if (!resumeText) {
    return res.status(400).json({ error: "No resume text provided." });
  }

  try {
  //    const prompt = `
  // You are an expert career coach. Analyze the resume below and provide suggestions on structure, content, impact, and clarity.

  // Resume Text:
  // ${resumeText}
  // `;
  //     const completion = await openai.chat.completions.create({
  //       model: "gpt-3.5-turbo",
  //       max_tokens: 1024, // Allow more output if needed
  //       messages: [{ role: "user", content: prompt }]
  //     });

  //     const feedback = completion.choices[0].message.content;
  //     res.json({ feedback });
  //   } catch (error) {
  //     console.error("GPT API error:", error);
  //     res.status(500).json({ error: "Failed to generate resume feedback." });
  //   }
  // });

  // server.js (DeepSeek via Hugging Face)

    const maxLength = 12000;
    const trimmedResume = resumeText.slice(0, maxLength);
    const prompt = `Please provide professional resume feedback for the following text:\n\n${trimmedResume}`;

  
    const response = await fetch("https://api-inference.huggingface.co/models/mistralai/Mistral-7B-Instruct-v0.1", {
      headers: {
        Authorization: `Bearer ${process.env.HUGGINGFACE_API_KEY}`,
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({ inputs: prompt })
    });
  
    const result = await response.json();
  
    if (result.error) {
      console.error("DeepSeek API error:", result.error);
      return res.status(500).json({ error: "DeepSeek API error" });
    }
  
    const feedback = Array.isArray(result) ? result[0]?.generated_text : result.generated_text;
    res.json({ feedback: feedback || "No feedback received from model." });
  
  } catch (error) {
    console.error("DeepSeek Request error:", error);
    res.status(500).json({ error: "Failed to generate resume feedback." });
  }
  
});

  // app.get("/", (req, res) => {
  //   res.send("🧠 SyncedIn Resume AI server is running!");
  // });

  // app.listen(port, () => {
  //   console.log(`🧠 OpenAI Resume Feedback server running at http://localhost:${port}`);
  // });
app.listen(port, () => {
  console.log(`🧠 SyncedIn Resume AI (DeepSeek) server running at http://localhost:${port}`);
});
import { OpenAI } from "openai";
import dotenv from "dotenv";

dotenv.config(); // Load .env file

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

(async () => {
  const models = await openai.models.list();
  console.log(models.data.map(model => model.id));
})();

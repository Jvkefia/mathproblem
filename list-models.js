const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

function getApiKey() {
  const env = fs.readFileSync(".env.local", "utf8");
  const match = env.match(/GEMINI_API_KEY=(.+)/);
  return match ? match[1].trim() : null;
}

const key = getApiKey();
const genAI = new GoogleGenerativeAI(key);

async function listModels() {
  try {
    const result = await genAI.listModels();
    console.log("Available Models:");
    result.models.forEach(m => {
      console.log(` - ${m.name} (Methods: ${m.supportedGenerationMethods.join(", ")})`);
    });
  } catch (e) {
    console.error("Error listing models:", e.message);
  }
}

listModels();

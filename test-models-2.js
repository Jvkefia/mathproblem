const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

function getApiKey() {
  const env = fs.readFileSync(".env.local", "utf8");
  const match = env.match(/GEMINI_API_KEY=(.+)/);
  return match ? match[1].trim() : null;
}

const key = getApiKey();
const genAI = new GoogleGenerativeAI(key);

const models = [
  "gemini-pro",
  "gemini-1.0-pro",
  "gemini-1.5-flash-8b",
  "gemini-1.5-flash-8b-latest"
];

async function testModels() {
  for (const modelName of models) {
    try {
      console.log(`Testing ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("test");
      console.log(`✅ ${modelName} works!`);
    } catch (e) {
      console.error(`❌ ${modelName} failed: ${e.message}`);
    }
  }
}

testModels();

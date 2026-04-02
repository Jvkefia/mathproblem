const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");

function getApiKey() {
  const env = fs.readFileSync(".env.local", "utf8");
  const match = env.match(/GEMINI_API_KEY=(.+)/);
  return match ? match[1].trim() : null;
}

const key = getApiKey();
if (!key) {
  console.error("API Key not found in .env.local");
  process.exit(1);
}

const genAI = new GoogleGenerativeAI(key);

const models = [
  "gemini-1.5-flash",
  "gemini-1.5-flash-latest",
  "gemini-1.5-pro",
  "gemini-2.0-flash-exp",
  "gemini-2.0-flash"
];

async function testModels() {
  console.log("Testing models with API Key:", key.substring(0, 10) + "...");
  for (const modelName of models) {
    try {
      console.log(`Testing ${modelName}...`);
      const model = genAI.getGenerativeModel({ model: modelName });
      const result = await model.generateContent("test");
      const response = await result.response;
      console.log(`✅ ${modelName} works!`);
      // Keep testing all models to see which ones are found or quota-blocked
    } catch (e) {
      console.error(`❌ ${modelName} failed: ${e.message}`);
      if (e.message.includes("quota") || e.message.includes("429")) {
        console.log("   (Quota issue, but model exists)");
      }
    }
  }
}

testModels();

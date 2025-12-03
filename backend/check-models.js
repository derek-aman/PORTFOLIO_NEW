require('dotenv').config();

const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error("❌ Error: GEMINI_API_KEY is missing from .env file");
  process.exit(1);
}

console.log(`Checking models for API Key starting with: ${API_KEY.substring(0, 5)}...`);

async function listModels() {
  try {
    // We use a raw fetch request to bypass SDK version issues
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();

    if (data.error) {
      console.error("\n❌ API Error:");
      console.error(data.error.message);
      console.log("\n💡 SOLUTION: Your API key might be invalid or from Vertex AI.");
      console.log("   Get a new key specifically from: https://aistudio.google.com/app/apikey");
    } else {
      console.log("\n✅ SUCCESS! Here are the models valid for your key:");
      const availableModels = data.models.map(m => m.name.replace('models/', ''));
      console.log(availableModels.join('\n'));
      
      console.log("\n👉 RECOMMENDATION: Update server.js to use: 'gemini-1.5-flash'");
    }
  } catch (err) {
    console.error("Network Error:", err);
  }
}

listModels();
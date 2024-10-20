const axios = require("axios");

const getDyslexiaTips = async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

    const prompt = `Provide 3 helpful tips for parents supporting children with dyslexia. Focus on general advice and strategies, without including any personal information. Please keep the answer short and crisp`;

    const response = await axios.post(`${apiUrl}?key=${apiKey}`, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    const tips = response.data.candidates[0].content.parts[0].text;
    res.json({ success: true, tips });
  } catch (error) {
    console.error("Error fetching dyslexia tips:", error);
    res
      .status(500)
      .json({ success: false, message: "Error fetching dyslexia tips" });
  }
};

const chatWithLLM = async (req, res) => {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    const apiUrl =
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent";

    const { messageHistory } = req.body; // Array of previous messages
    const userMessage = req.body.userMessage; // Current user message

    // Prepare the prompt with message history and new user input
    const prompt =
      messageHistory.map((msg) => `${msg.sender}: ${msg.text}`).join("\n") +
      `\nuser: ${userMessage}\nbot:`;

    const response = await axios.post(`${apiUrl}?key=${apiKey}`, {
      contents: [{ parts: [{ text: prompt }] }],
    });

    const botReply = response.data.candidates[0].content.parts[0].text;

    // Return the bot's response
    res.json({ success: true, botReply });
  } catch (error) {
    console.error("Error in chatbot interaction:", error);
    res
      .status(500)
      .json({ success: false, message: "Error interacting with the chatbot" });
  }
};

module.exports = {
  getDyslexiaTips,
  chatWithLLM,
};

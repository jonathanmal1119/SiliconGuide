const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Verify the user as a freelancer
exports.query = async (req, res) => {
    const { message } = req.body;

    const systemPrompt = `You are a helpful assistant that recommends compatible PC parts given a user's budget, goals, and preferences. Return a build as JSON with keys: CPU, GPU, RAM, Storage, Motherboard, Power Supply, Case. Each value should be an object with name, price, and wattage.`;

    const userPrompt = `User query: "${message}"`;

    const chat = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt },
        ],
        temperature: 0.7,
    });

    const aiResponse = chat.choices[0].message.content;

    try {
        const build = JSON.parse(aiResponse); // only if you prompt GPT to return JSON
        res.json({ response: "Here's your build", parts: build });
    } catch (e) {
        res.status(500).json({ error: "Failed to parse AI response", raw: aiResponse });
    }
};
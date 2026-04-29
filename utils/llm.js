import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export async function askLLM(prompt) {
  try {
    const res = await axios.post(
      `${process.env.BASE_URL}/chat/completions`,
      {
        model: process.env.MODEL,
        messages: [{ role: "user", content: prompt }],
        temperature: 0.2
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
        }
      }
    );

    return res.data.choices[0].message.content;
  } catch (err) {
    console.error("LLM调用失败:", err.message);
    return "LLM调用失败";
  }
}


import { GoogleGenAI } from "@google/genai";

const API_KEY = process.env.API_KEY || "";

export const getStyleAdvice = async (userPrompt: string) => {
  if (!API_KEY) return "AI Assistant is currently unavailable.";
  
  const ai = new GoogleGenAI({ apiKey: API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userPrompt,
      config: {
        systemInstruction: `You are 'Jaina Style Assistant', an expert interior designer and home improvement consultant for Jaina Paints & Sanitary in Muzaffarnagar. 
        Your goal is to help users choose paint colors (mentioning brands like Asian Paints, Berger) and luxury sanitary fittings (like Jaquar, Hindware, CERA). 
        Be professional, creative, and always mention that they should visit the Shamli Road showroom for a real-world visualization. 
        Keep responses concise and helpful. Use a friendly tone.`,
        temperature: 0.7,
      }
    });
    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am having trouble connecting right now. Please visit our showroom on Shamli Road!";
  }
};

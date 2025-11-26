const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({})

async function Gemini(prompt, base64) {
  const content = [
    {
      inlineData: {
        mimeType: "image/png",
        data: base64
      }
    },
    {
      text: `${prompt}`
    }
  ]
  console.log("starting generation");
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: content,
    config:{
      temperature: 1.0,
      systemInstruction:"Output only code"
    }
  })
  // for await (const chunk of response) {
  //   console.log(chunk.text);
  // }
  console.log("generation successfull");
  console.log(response.text);
  
  return response.text.replaceAll("```", "").replace("jsx", "")

}

module.exports = Gemini
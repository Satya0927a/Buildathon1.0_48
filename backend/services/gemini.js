const { GoogleGenAI } = require("@google/genai");
const ai = new GoogleGenAI({})

async function Gemini_generate(prompt, base64) {
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
  
  return response.text.replaceAll("```", "").replace("jsx", "").replace("javascript","")

}

async function Gemini_update(prompt) {
  console.log("regenerating")
  const response = await ai.models.generateContent({
    model: "gemini-2.5-flash-lite",
    contents: `${prompt}`,
    config:{
      temperature:1.0,
      systemInstruction:"Output only code"
    }
  });
  console.log(response.text);
  return response.text.replaceAll("```", "").replace("jsx", "").replace("javascript","")
}


module.exports = {Gemini_generate,Gemini_update}
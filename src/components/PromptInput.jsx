import React, { useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";
import { GoogleGenerativeAI } from "@google/generative-ai";

const PromptInput = () => {
  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const { setChatState } = useContext(ChatContext);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = async (e) => {
    const submitBtn = document.querySelector(".submit-prompt");
    submitBtn.disabled = true;
    try {
      if (prompt) {
        e.preventDefault();
        setChatState((prev) => [...prev, { prompt }]);
        setPrompt("");
        const result = await model.generateContent(prompt);
        const response = result.response;
        const text = response.text();
        setChatState((prev) => [...prev, { text }]);
        submitBtn.disabled = false;
      }
    } catch (e) {
      console.log("Error:", e);
    }
  };

  return (
    <>
      <div className="relative w-full h-full">
        <textarea
          className="font-sfPro tracking-wider block w-full h-full p-4 pr-20 text-sm text-white resize-none bg-[#161b22] rounded-xl outline-none md:text-xl"
          placeholder="Ask Me Anything..."
          onChange={(e) => setPrompt(e.target.value)}
          value={prompt}
        ></textarea>
        <button
          type="submit"
          className="submit-prompt absolute right-0 top-0 bottom-0 font-sfPro tracking-wider bg-[#161b22] text-white hover:opacity-80 focus:outline-none font-medium rounded-r-xl text-sm px-4 py-2 disabled:opacity-80 md:text-lg"
        >
          Ask
        </button>
      </div>
    </>
  );
};
export default PromptInput;

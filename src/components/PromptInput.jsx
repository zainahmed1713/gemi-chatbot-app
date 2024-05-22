import React, { useState, useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

const PromptInput = () => {
  const { setChatState } = useContext(ChatContext);
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setChatState((prev) => [...prev, { prompt }]);
    setPrompt("");
  };

  return (
    <div className="relative w-screen md:w-4/5">
      <textarea
        className="font-sfPro tracking-wider block w-full h-[170px] mt-20 p-4 text-sm text-white resize-none bg-[#101010] rounded-xl outline-none md:text-lg md:h-[200px]"
        placeholder="Ask Me Anything..."
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      ></textarea>
      <button
        type="submit"
        className="font-sfPro text-white tracking-wider absolute end-2.5 bottom-16 bg-[#161b22] hover:opacity-80 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 disabled:opacity-80 md:text-lg"
        onClick={handleSubmit}
      >
        Ask
      </button>
    </div>
  );
};
export default PromptInput;

import React, { useState } from "react";

const PromptInput = () => {
  const [prompt, setPrompt] = useState(null);
  return (
    <div className="relative w-screen md:w-4/5">
      <input
        type="text"
        className="font-sfPro tracking-wider block w-full p-4 text-sm text-white bg-[#101010] rounded-xl outline-none md:text-lg md:h-full"
        placeholder="Ask Me Anything..."
        required
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
      <button
        type="submit"
        className="font-sfPro text-white tracking-wider absolute end-2.5 bottom-2.5 bg-[#161b22] hover:opacity-80 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 disabled:opacity-80 md:text-lg"
      >
        Ask
      </button>
    </div>
  );
};
export default PromptInput;

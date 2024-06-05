import React, { useContext } from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ChatContext } from "../contexts/ChatContext";

const DisplayChat = () => {
  const { chatState } = useContext(ChatContext);
  const randomNumber = Math.floor(Math.random() * 100);

  return (
    <div className="flex flex-col ml-1 mb-2 lg:items-center">
      {chatState.map((chat) => (
        <>
          {chat?.prompt && (
            <div
              key={randomNumber}
              className="font-sfPro text-white tracking-widest w-fit p-4 m-2 bg-[#161b22] rounded-xl shadow-2xl lg:w-1/2"
            >
              <p className="text-wrap text-lg md:text-xl">{chat.prompt}</p>
            </div>
          )}
          {chat?.text && (
            <div
              key={randomNumber + 1}
              className="font-sfPro text-white tracking-widest w-fit p-4 m-2 bg-[#161b22] rounded-xl shadow-2xl lg:w-1/2"
            >
              <Markdown
                className="gemini-response text-wrap text-lg md:text-xl"
                remarkPlugins={[remarkGfm]}
              >
                {chat.text}
              </Markdown>
            </div>
          )}
        </>
      ))}
    </div>
  );
};
export default DisplayChat;

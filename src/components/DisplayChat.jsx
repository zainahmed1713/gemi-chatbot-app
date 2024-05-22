import React, { useContext } from "react";
import { ChatContext } from "../contexts/ChatContext";

const DisplayChat = () => {
  const { chatState } = useContext(ChatContext);
  console.log(chatState);

  return (
    <div className="chats h-4/5 flex flex-col-reverse overflow-scroll">
      <div className="flex flex-col ml-1 mb-2 lg:items-center">
        {chatState.map((chat, index) => (
          <div
            key={index}
            className="font-sfPro text-white tracking-widest w-fit p-4 m-2 bg-[#101010] rounded-xl shadow-2xl lg:w-1/2"
          >
            <p className="text-wrap text-lg md:text-xl">{chat.prompt}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default DisplayChat;

import React, { useState, createContext } from "react";

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
  const [chatState, setChatState] = useState([
    { prompt: "Hello, How may I help you?" },
  ]);

  return (
    <ChatContext.Provider value={{ chatState, setChatState }}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;

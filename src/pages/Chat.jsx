import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PromptInput from "../components/PromptInput";
import DisplayChat from "../components/DisplayChat";

const Chat = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser === null) {
      navigate("/");
    } else {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Navbar />
      <div className="chat-container w-screen h-screen bg-[#101010] mt-16">
        <div className="chats h-3/4 flex flex-col-reverse overflow-scroll">
          <DisplayChat />
        </div>
        <div className="prompt-input flex items-center justify-center h-1/4">
          <PromptInput />
        </div>
      </div>
    </>
  );
};
export default Chat;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GetStarted from "../components/GetStarted";
import Footer from "../components/Footer";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const getUser = JSON.parse(localStorage.getItem("user"));
    if (getUser) {
      navigate("/chat");
    }
  }, [navigate]);

  return (
    <>
      <div className="landing-page-container bg-[#101010] h-screen w-screen flex flex-col justify-center items-center font-sfPro">
        <h1 className="text-[#fdfdfd] text-7xl tracking-wider md:text-9xl">
          Gemi
        </h1>
        <p className="text-gray-400 md:text-4xl md:my-2 lg:text-3xl lg:my-1">
          AI Chatbot
        </p>
        <GetStarted
          padding="p-2 md:p-4 lg:p-3"
          margin="my-2 md:my-4"
          textSize="md:text-xl lg:text-lg"
        />
      </div>
      <Footer />
    </>
  );
};
export default LandingPage;

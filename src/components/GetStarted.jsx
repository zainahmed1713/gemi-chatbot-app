import React from "react";
import useGoogleSignIn from "../hooks/useGoogleSignIn";
import PropTypes from "prop-types";

const GetStarted = ({ padding, margin, textSize }) => {
  const { signup } = useGoogleSignIn();

  const handleSignup = async (e) => {
    e.preventDefault();
    const signupBtn = document.querySelector(".signup-btn");
    try {
      signupBtn.disabled = true;
      await signup();
    } catch (e) {
      signupBtn.disabled = false;
    }
    signupBtn.disabled = false;
  };

  return (
    <button
      className={`signup-btn bg-[#a6ff00] text-[#161b22] ${textSize} ${padding} ${margin} rounded-xl font-sfPro hover:opacity-90 disabled:opacity-60`}
      onClick={handleSignup}
    >
      Get Started
    </button>
  );
};

GetStarted.propTypes = {
  margin: PropTypes.any,
  padding: PropTypes.any,
  textSize: PropTypes.any,
};
export default GetStarted;

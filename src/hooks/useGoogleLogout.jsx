import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../contexts/Auth";
import { getAuth, signOut } from "firebase/auth";
import app from "../../Firebase/firebaseConfig";

const auth = getAuth(app);

const useGoogleLogout = () => {
  const { setUser } = useContext(Auth);
  const navigate = useNavigate();

  const logout = async () => {
    setTimeout(async () => {
      await signOut(auth);
      setUser(null);
      navigate("/");
    }, 3000);
  };

  return { logout };
};
export default useGoogleLogout;

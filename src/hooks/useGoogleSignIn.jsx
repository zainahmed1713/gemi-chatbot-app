import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Auth } from "../contexts/Auth";
import app from "../../Firebase/firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const useGoogleSignIn = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(Auth);

  const signup = async () => {
    try {
      const { user } = await signInWithPopup(auth, provider);
      const { uid, displayName, email, photoURL } = user;
      localStorage.setItem(
        "user",
        JSON.stringify({
          uid: uid,
          name: displayName,
          email: email,
          photoURL: photoURL,
        })
      );

      setUser({
        uid: uid,
        name: displayName,
        email: email,
        photoURL: photoURL,
      });

      navigate("/chat");
    } catch (error) {
      throw new Error(error);
    }
  };
  return { signup };
};

export default useGoogleSignIn;

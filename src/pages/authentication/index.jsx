import React, { useEffect } from "react";
import { auth, provider } from "../../config/firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import {useGetUserInfo} from "../../hooks/useGetUserInfo"
import "./styles.css"

export const Auth = () => {
  const navigate = useNavigate();
  const {isAuth} = useGetUserInfo();

  const signInWithGoogle = async () => {
    const results = await signInWithPopup(auth, provider);
    const authinfo = {
      userID: results.user.uid,
      name: results.user.displayName,
      profilePhoto: results.user.photoURL,
      isAuth: true,
    };
    localStorage.setItem("auth", JSON.stringify(authinfo));
    navigate("/ex-tracker");
  };

  if (isAuth) {
    return <Navigate to = "/ex-tracker"/>
  }

  return (
    <div className="login-page">
      <p>Sign In With Google to Continue</p>
      <button className="login-with-google-btn" onClick={signInWithGoogle}>
        {" "}
        Sign In With Google
      </button>
    </div>
  );
};

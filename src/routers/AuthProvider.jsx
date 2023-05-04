import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvaider = new GoogleAuthProvider(app);
const githubProvider = new GithubAuthProvider(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const createUserByGoogle = () => {
    return signInWithPopup(auth, googleProvaider);
  };
  const createUserByGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
    setError("wrong information");
  };

  const logOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("auth stat change", currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loading,
    createUser,
    createUserByGoogle,
    createUserByGithub,
    loginUser,
    logOutUser,
    error,
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;

import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../../firebase/firebase.js";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState({});
  const [userIdToken, setUserIdToken] = useState(null);

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  };

  const signin = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  };

  const signout = () => {
    return auth.signOut();
  };


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      if (user !== null) {
        user.getIdToken().then((idToken) => {
          setUserIdToken(idToken);
        });
      }
      console.log('idToken', userIdToken)
    });
    return unsubscribe;
  }, [currentUser, userIdToken]);

  // if (currentUser) {
  //   axios.defaults.headers.common['Authorization'] = `Bearer ${userIdToken}`
  // }

  const value = {
    currentUser,
    signup,
    userIdToken,
    signin,
    signout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

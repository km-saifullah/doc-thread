import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase.config";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  // sign up user
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   sign in  user
  const signInUserWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   get the signed in user info
  const getSignedInUser = (user) => {
    return onAuthStateChanged(auth, user);
  };

  // signout user
  const userSignOut = () => {
    return signOut(auth);
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        getSignedInUser,
        signInUserWithEmailAndPassword,
        userSignOut,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

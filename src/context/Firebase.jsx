import { createContext, useContext } from "react";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../config/firebase.config";
import { ref, set } from "firebase/database";

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

  // send user data to the real time database
  const sendUserDataToDb = (userId, name, email, phone) => {
    return set(ref(db, "users/" + userId), {
      fullName: name,
      email: email,
      phoneNumber: phone,
    });
  };

  return (
    <FirebaseContext.Provider
      value={{
        signUpUserWithEmailAndPassword,
        getSignedInUser,
        signInUserWithEmailAndPassword,
        userSignOut,
        sendUserDataToDb,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

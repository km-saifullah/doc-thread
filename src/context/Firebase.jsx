import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../config/firebase.config";

const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  // sign up user
  const signUpUserWithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   put data in the database
  //   const putData = ()

  return (
    <FirebaseContext.Provider value={{ signUpUserWithEmailAndPassword }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

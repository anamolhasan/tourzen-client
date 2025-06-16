import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const provider = new GoogleAuthProvider()

// create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in user
  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign in google
  const signInGoogle = () => {
    setLoading(true)
    return signInWithPopup(auth, provider)
  }

  // update profile user
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
  }

  // log out user
  const logOutUser = () => {
     return signOut(auth)
  }


  // set an authentication state observer and get user data
  useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (createUser)=> {
      setUser(createUser)
      setLoading(false)
     })
     return ()=> {
      unsubscribe()
     }
  },[])

  // -----------------------------

  const userInfo = {
    createUser,
    signInUser,
    user,
    setUser,
    loading,
    updateUser,
    signInGoogle,
    logOutUser
  };


  return <AuthContext value={userInfo}>
              {children}
         </AuthContext>;
};

export default AuthProvider;

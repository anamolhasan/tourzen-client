import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, onAuthStateChanged, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)


// create user with email and password
  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // update profile user
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData)
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
    user,
    setUser,
    loading,
    updateUser
  };


  return <AuthContext value={userInfo}>
              {children}
         </AuthContext>;
};

export default AuthProvider;

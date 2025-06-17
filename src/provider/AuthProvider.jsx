import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import Swal from "sweetalert2";

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
    //  return signOut(auth)
     Swal.fire({
        title: 'Are you sure?',
        text: 'Do you really want to log out?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, log out!',
      }).then((result) => {
        if (result.isConfirmed) {
          signOut(auth)
            .then(() => {
              Swal.fire('Logged out!', 'You have been successfully logged out.', 'success');
            })
            .catch((error) => {
              console.error(error);
              Swal.fire('Error!', 'Something went wrong while logging out!', 'error');
            });
        }
      });
  }


  // set an authentication state observer and get user data
  useEffect(()=>{
     const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
      setUser(currentUser)
      // console.log(currentUser)
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


  return <AuthContext.Provider value={userInfo}>
              {children}
         </AuthContext.Provider>;
};

export default AuthProvider;

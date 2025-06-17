import React, { use } from "react";

import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../../provider/AuthContext";
import { FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";

const SocialLogin = ({form}) => {

    const {signInGoogle} = use(AuthContext)
     const navigate = useNavigate()

    const handleGoogleSignIn = () => {
        signInGoogle()
        .then(result => {
            console.log(result)
            navigate(form || '/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    const handleTwitterSignIn = () =>{
        toast.info('sorry twitter login not allow !')
    }

    const handleGithubSignIn = () =>{
        toast.info('sorry Github login not allow !')
    }

  return (
    <div>
      <div className="divider text-sm">Login with social accounts</div>
      <div className="flex justify-center space-x-2 text-2xl">
        <button onClick={handleGoogleSignIn} aria-label="Log in with Google" className="p-3 rounded-sm">
          <FaGoogle />
        </button>
        <button onClick={handleTwitterSignIn} aria-label="Log in with Twitter" className="p-3 rounded-sm">
          <FaTwitter />
        </button>
        <button onClick={handleGithubSignIn} aria-label="Log in with GitHub" className="p-3 rounded-sm">
          <FaGithub />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
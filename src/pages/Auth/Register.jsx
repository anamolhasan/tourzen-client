import React, { useContext } from 'react'
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router'
import { AuthContext } from '../../provider/AuthContext'
import Swal from 'sweetalert2'
import SocialLogin from '../../components/ui/SocialLogin'

const Register = () => {
	const {createUser, updateUser, setUser} = useContext(AuthContext)

	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

		const from = e.target
		const fromData = new FormData(from)
		const {email, password, name, photo} = Object.fromEntries(fromData.entries())
		

		// create user in the firebase
		createUser(email,password)
		  .then((result)=>{
			const newUser = result.user

			// update user
			updateUser({
				displayName:name || '',
				photoURL:photo || '',
			})
			  .then(()=>{
				setUser({
					...newUser,
					displayName:name || '',
				    photoURL:photo || '',
				})
				 Swal.fire({
					icon: 'success',
					title: 'Your account is created.',
					showConfirmButton: false,
					timer: 1500,
				})
				navigate('/')
			  })
			  .catch(error => {
				Swal.fire({
					icon: "error",
					title: "Oops...",
					text: ("Profile update error:", error),
					footer: '<a href="#">Why do I have this issue?</a>'
					});
				// console.log("Profile update error:", error)
				setUser(newUser)
			  })
			
		  })
		  .catch((error)=>{
			console.log("Registration error:", error)
		  })

	}

  return (
    <div className="w-full max-w-md mx-auto  my-24 p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-300">
	<h1 className="text-2xl font-bold text-center">Register</h1>
	<form onSubmit={handleSubmit} className="space-y-6">

		<div className="space-y-1 text-sm">
			<label htmlFor="fullname" className="block dark:text-gray-300">Full Name</label>
			<input type="text" name="name" id="name" placeholder="enter full name" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>

		<div className="space-y-1 text-sm">
			<label htmlFor="email" className="block dark:text-gray-300">Email</label>
			<input type="email" name="email" id="email" placeholder="tourzen@gmail.com" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>

		<div className="space-y-1 text-sm">
			<label htmlFor="photo" className="block dark:text-gray-300">Photo URL</label>
			<input type="text" name="photo" id="photo" placeholder="photo URL" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>

		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-300">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />		
		</div>

		<button type='submit' className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Register</button>
	</form>

	<div className="flex items-center pt-4 space-x-1">
        
      </div>
      <div>
		<SocialLogin />
	  </div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-300 ">Al ready have an account? please
		<Link to={'/login'}  className="underline dark:text-gray-300 pl-3">Sign in</Link>
	</p>
</div>
  )
}

export default Register
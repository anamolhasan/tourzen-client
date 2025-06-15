import React from 'react'
import { FaGithub, FaGoogle, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router'

const Login = () => {
  return (
    <div className="w-full max-w-md mx-auto  my-24 p-8 space-y-3 rounded-xl dark:bg-gray-900 dark:text-gray-300">
	<h1 className="text-2xl font-bold text-center">Sign In</h1>
	<form noValidate="" action="" className="space-y-6">
    
		<div className="space-y-1 text-sm">
			<label htmlFor="email" className="block dark:text-gray-300">Email</label>
			<input type="email" name="email" id="email" placeholder="enter your email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
		</div>

		<div className="space-y-1 text-sm">
			<label htmlFor="password" className="block dark:text-gray-300">Password</label>
			<input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
			<div className="flex justify-end text-xs dark:text-gray-300">
				<a rel="noopener noreferrer" href="#">Forgot Password?</a>
			</div>
		</div>
		<button className="block w-full p-3 text-center rounded-sm dark:text-gray-50 dark:bg-violet-600">Sign In</button>
	</form>
	<div className="flex items-center pt-4 space-x-1">
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
		<p className="px-3 text-sm dark:text-gray-300">Login with social accounts</p>
		<div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
	</div>
	<div className="flex justify-center space-x-2 text-2xl">
		<button aria-label="Log in with Google" className="p-3 rounded-sm">
			<FaGoogle />
		</button>
		<button aria-label="Log in with Twitter" className="p-3 rounded-sm">
			<FaTwitter />
		</button>
		<button aria-label="Log in with GitHub" className="p-3 rounded-sm">
			<FaGithub />
		</button>
	</div>
	<p className="text-xs text-center sm:px-6 dark:text-gray-300 ">Don't ready have an account? please
		<Link to={'/register'} className="underline dark:text-gray-300 pl-3">Register</Link>
	</p>
</div>
  )
}

export default Login
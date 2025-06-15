import React from 'react'
import { FaBars, FaUser } from 'react-icons/fa'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    <header className="p-4 border-b">
	<div className="container flex justify-between h-16 mx-auto">
		<Link to={'/'} aria-label="Back to homepage" className="flex items-center p-2 text-2xl font-bold">
		  TOURZEN
		</Link>
		<ul className="items-stretch hidden  lg:flex">
			<li className="flex">
				<NavLink to={'/'}  className="flex items-center px-4 -mb-1  ">Home</NavLink>
			</li>
			<li className="flex">
				<NavLink to={'/all-package'} className="flex items-center px-4 -mb-1 ">All Package</NavLink>
			</li>
			<li className="flex">
				<NavLink to={'/MyBookingsPackages'} className="flex items-center px-4 -mb-1 ">My Booking Packages</NavLink>
			</li>
			<li className="flex">
				<NavLink to={'/about'} className="flex items-center px-4 -mb-1 ">About</NavLink>
			</li>
			<li className="flex">
				<NavLink to={'/tour-gide'} className="flex items-center px-4 -mb-1 ">Tour Gide</NavLink>
			</li>


		</ul>
		<div className="items-center flex-shrink-0 hidden lg:flex gap-5">
			 <button className="self-center p-2 rounded-full bg-gray-500">
        <Link to={'/dashboard'}> <FaUser className='text-2xl'/></Link>
        
      </button>
       
			<button >
        <Link to={'/login'} className='self-center px-8 py-3 rounded bg-gray-500'>Sign in</Link>
      </button>
		</div>

		<button className="p-4 lg:hidden">
			<FaBars />
		</button>
	</div>
</header>
  )
}

export default Navbar
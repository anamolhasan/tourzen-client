import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../components/shared/Navbar'
import Footer from '../components/shared/Footer'

const MainLayout = () => {
  return (
    <div>
      <Navbar />
       <div className='container mx-auto'>
         <Outlet />
       </div>
       <Footer />
   
    </div>
  )
}

export default MainLayout
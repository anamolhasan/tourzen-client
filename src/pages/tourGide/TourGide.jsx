import React from 'react'
import { Link } from 'react-router'
import Gide1 from './components/Gide1'

const TourGide = () => {
  return (
    <div className='text-center pt-2'>
      <h1 className='text-4xl text-center  '>ট্রাভেল টিপস</h1>
      <hr className='w-36 mx-auto my-5 border-2 border-green-600 '/>
      <p className='text-center font-bold'>ভ্রমনের জন্য প্রয়োজনীয় জিনসি প্রত্র</p>

       <Gide1 />

       <p className='text-3xl mt-20'>The section is cooking....</p>
      <Link className='btn btn-group ' to={'/'}>Go to Home Page</Link>
    </div>
  )
}

export default TourGide
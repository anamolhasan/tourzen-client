import React from 'react'
import { Link } from 'react-router'

const TourGide = () => {
  return (
    <div className='text-center'>
      <p className='text-7xl text-center py-32'>tour gide is coking</p>

      <Link className='btn btn-group ' to={'/'}>Go to Home Page</Link>
    </div>
  )
}

export default TourGide
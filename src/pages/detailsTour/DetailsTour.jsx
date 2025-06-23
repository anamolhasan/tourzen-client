import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router'

const DetailsTour = () => {
    const {tour_Id} = useParams()

    const tours =  useLoaderData()
   
  return (
    <div>
        <p>Tour Id : {tour_Id}</p>
        <p className='text-2xl font-bold py-3'>{tours.length}</p>
       <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
         {
          tours.map(tour => <div key={tour.tourId} >
            <div className='border p-5 rounded-md'>
               <p>{tour.tourName}</p>
            <p>{tour.buyerName}</p>
            <p>{tour.price}</p>
            </div>
          </div>)
        }
       </div>
       <p className='my-9'>
        <Link className='btn btn-primary' to={'/dashboard/managePackage'}>go to posted tour</Link>
       </p>

        </div>
  )
}

export default DetailsTour
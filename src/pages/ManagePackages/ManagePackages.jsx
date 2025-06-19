import React, { Suspense, useContext } from 'react'
import TourList from './TourList'
import { tourCreatedByPromise } from '../../api/toursApi'
import { AuthContext } from '../../provider/AuthContext'

const ManagePackages = () => {

   const {user} = useContext(AuthContext)

  return (
    <div>
       <h2>My posted Tour</h2>
       <Suspense >
          <TourList 
          tourCreatedByPromise={tourCreatedByPromise(user?.email)}
          />
       </Suspense>
    </div>
  )
}

export default ManagePackages
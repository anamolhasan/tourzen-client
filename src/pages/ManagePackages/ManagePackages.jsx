import React, { Suspense } from 'react'
import TourList from './TourList'
// import { tourCreatedByPromise } from '../../api/toursApi'
// import { AuthContext } from '../../provider/AuthContext'
import Loading from '../../components/shared/Loading'
import useAuth from '../../hooks/useAuth'
import { tourManagementByPromise } from '../../api/myManageAllTour'

const ManagePackages = () => {

   const {user} = useAuth()

  return (
    <div>
       <h2>My posted Tour</h2>
       <Suspense fallback={<Loading />}>
          <TourList 
          tourManagementByPromise={tourManagementByPromise(user?.email)}
          />
       </Suspense>
    </div>
  )
}

export default ManagePackages
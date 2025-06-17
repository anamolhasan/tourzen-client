
import React, { Suspense } from 'react'
import TourPackageCard from '../../components/ui/TourPackageCard'
import Loading from '../../components/shared/Loading'

const AllPackages = () => {
  const allTourPackage = fetch('http://localhost:3000/tours').then(res => res.json())

  
  return (
    <div className="px-4 md:px-10 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">🌍 All Tour Packages</h1>
       <Suspense fallback={<Loading />}>
          <TourPackageCard allTourPackage={allTourPackage}/>
       </Suspense>
    </div>
  )
}

export default AllPackages
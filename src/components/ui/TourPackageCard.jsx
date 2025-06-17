import React, { use } from "react";
import PackageCard from "./PackageCard";

const TourPackageCard = ({ allTourPackage }) => {
  const allPackage = use(allTourPackage);
  console.log(allPackage);
  return (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {allPackage.map((singlePackage) => (
        <PackageCard key={singlePackage._id} singlePackage={singlePackage} />
      ))}
    </div>
  );
};

export default TourPackageCard;

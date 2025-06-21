import React, { useEffect, useState } from "react";
import PackageCard from "../../components/ui/PackageCard";

const AllPackages = () => {
  const [allTourPackage, setAllTourPackage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/tours")  // তোমার API URL
      .then((res) => res.json())
      .then((data) => {
        setAllTourPackage(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // searchTerm দিয়ে নাম ফিল্টার করা হচ্ছে (case-insensitive)
  const filteredPackages = allTourPackage.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return <p>Loading...</p>;  // তোমার loading কম্পোনেন্ট বা স্পিনার
  }

  return (
    <div className="container mx-auto p-4">
      
       <div className="text-center py-10">
         <h1 className="text-3xl font-bold mb-6">All Tour Packages</h1>

      {/* Search input */}
      <input
        type="text"
        placeholder="Search by package name..."
        className="w-1/2 p-2 mb-4 border rounded"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
       </div>

      {/* প্যাকেজের লিস্ট দেখানো */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {filteredPackages.length > 0 ? (
    filteredPackages.map((singlePackage) => (
      <div key={singlePackage._id} className="border rounded p-4 shadow">
        <PackageCard singlePackage={singlePackage} />
      </div>
    ))
  ) : (
    <div className="col-span-1 md:col-span-2 lg:col-span-3">
      <p className="text-center   text-2xl text-gray-400 py-10 bg-gray-700 rounded shadow-lg">
        🛑 কোনো প্যাকেজ পাওয়া যায়নি
      </p>
    </div>
  )}
</div>

    </div>
  );
};

export default AllPackages;

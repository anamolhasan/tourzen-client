import React, { useEffect, useState } from "react";
import PackageCard from "../../components/ui/PackageCard";

const AllPackages = () => {
  const [allTourPackage, setAllTourPackage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState(""); // নতুন state

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/tours`) 
      .then((res) => res.json())
      .then((data) => {
        setAllTourPackage(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // প্রথমে search filter
  let filteredPackages = allTourPackage.filter((pkg) =>
    pkg.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // তারপর sort
  if (sortOption === "lowToHigh") {
    filteredPackages = [...filteredPackages].sort((a, b) => a.price - b.price);
  } else if (sortOption === "highToLow") {
    filteredPackages = [...filteredPackages].sort((a, b) => b.price - a.price);
  }

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="text-center py-10">
        <h1 className="text-3xl font-bold mb-6">All Tour Packages</h1>

       <div className="flex gap-10 justify-between">
           {/* Search input */}
        <input
          type="text"
          placeholder="Search by package name..."
          className="w-1/2 p-2 mb-4 border rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        {/* Sort dropdown */}
        <select
          className=" p-2 mb-4 border rounded ml-4 dark:bg-black"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort by price...</option>
          <option value="lowToHigh">Low to High</option>
          <option value="highToLow">High to Low</option>
        </select>
       </div>
      </div>

      {/* প্যাকেজ লিস্ট */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((singlePackage) => (
            <div key={singlePackage._id} className="border rounded p-4 shadow">
              <PackageCard singlePackage={singlePackage} />
            </div>
          ))
        ) : (
          <div className="col-span-1 md:col-span-2 lg:col-span-3">
            <p className="text-center border rounded-md text-2xl py-10 shadow-lg">
              🛑 কোনো প্যাকেজ পাওয়া যায়নি
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllPackages;

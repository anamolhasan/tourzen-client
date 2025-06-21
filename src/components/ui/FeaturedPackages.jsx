import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const FeaturedPackages = () => {
  const [packages, setPackages] = useState([]);

console.log(packages)

  useEffect(() => {
    fetch("http://localhost:3000/tours")
      .then((res) => res.json())
      .then((data) => {
        const top6 = data.slice(0, 6);
        setPackages(top6);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-6">Featured Packages</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {packages.map((tour) => (
          <div
            key={tour._id}
            className="border rounded-xl shadow-lg p-4 hover:shadow-2xl transition"
          >
            <img
              src={tour.photo}
              alt={tour.tour_name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{tour.tour_name}</h3>
            <div className="flex items-center gap-2 mb-2">
              <img
                src={tour.gidePhoto}
                alt={tour.guide_name}
                className="w-8 h-8 rounded-full"
              />
              <div>
                <p className="text-sm font-bold">{tour.gideName}</p>
                <p className="text-sm">{tour.gideEmail}</p>
              </div>
            </div>
            <p><strong>Duration : </strong> {tour.duration}</p>
            <p><strong>Departure : </strong> {tour.departureDate}</p>
            <p><strong>Price:</strong> ${tour.price}</p>
            <Link to={`/details-package/${tour._id}`}>
              <button className="mt-4 btn btn-primary w-full">View Details</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Show All Button */}
      <div className="text-center mt-10">
        <Link to="/all-package">
          <button className="btn btn-outline btn-secondary">Show All Packages</button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPackages;

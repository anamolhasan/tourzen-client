import React, { use } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router";

const TourList = ({ tourManagementByPromise }) => {
  const tours = use(tourManagementByPromise);
  console.log(tours)
  return (
    <div>
      <h2 className="text-3xl font-bold">My posted Tour : {tours.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Tour Name</th>
              <th>Job</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* rows */}
            {tours.map((tour, index) => (
              <tr key={tour._id}>
                <th>{index + 1}</th>
                <td>{tour.name}</td>
                <td>Quality Control Specialist</td>
                <td>{tour.price}</td>
                <td ><FaRegEdit /></td>
                <td><MdDelete/></td>
                <td><Link to={`/dashboard/viewTour/${tour._id}`}>view tour</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourList;

import React, { useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router"; // ✅ এটা ঠিক
import Swal from "sweetalert2";

const TourList = ({ tourManagementByPromise, email }) => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    if (email) {
      tourManagementByPromise(email).then((data) => {
        setTours(data);
      });
    }
  }, [email, tourManagementByPromise]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://tour-zen-server-five.vercel.app/tours/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Your tour has been deleted.", "success");
              setTours((prev) => prev.filter((item) => item._id !== _id));
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto mt-4">
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Tour Name</th>
            <th>Booking Count</th>
            <th>Price</th>
            <th>Edit</th>
            <th>Delete</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {tours.map((tour, index) => (
            <tr key={tour._id}>
              <td>{index + 1}</td>
              <td>{tour.name}</td>
              <td>{tour.toursBooking_count || 0}</td>
              <td>{tour.price}</td>
              <td>
                <Link to={`/dashboard/updateTour/${tour._id}`}>
                  <FaRegEdit />
                </Link>
              </td>
              <td onClick={() => handleDelete(tour._id)}>
                <MdDelete />
              </td>
              <td>
                <Link to={`/dashboard/viewTour/${tour._id}`}>View</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TourList;

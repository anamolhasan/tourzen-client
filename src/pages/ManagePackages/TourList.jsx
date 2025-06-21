import React, { useContext, useEffect, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router"; // ✅ এটা router থেকে নয়
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthContext";

const TourList = () => {
  const { user, loading } = useContext(AuthContext);
  const [tour, setMyTour] = useState([]);

  // ✅ useEffect এর ভিতর সঠিক API ব্যবহার করো
  useEffect(() => {
    if (!loading && user?.email) {
      fetch(`http://localhost:3000/tours/myBooking?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => setMyTour(data));
    }
  }, [user, loading]);

  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/tours/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire("Deleted!", "Tour has been deleted.", "success");
              setMyTour((prevTour) =>
                prevTour.filter((p) => p._id !== _id)
              );
            }
          });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl font-bold">My Posted Tours: {tour.length}</h2>
      <div className="overflow-x-auto">
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
            {tour.map((tour, index) => (
              <tr key={tour._id}>
                <th>{index + 1}</th>
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
                  <Link to={`/dashboard/viewTour/${tour._id}`}>
                    view tour
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TourList;

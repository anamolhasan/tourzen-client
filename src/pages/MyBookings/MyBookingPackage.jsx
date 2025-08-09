import React, { useState } from "react";
import { useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import axios from "axios";

const MyBookingPackage = ({setShowModal, tour}) => {
  const { id: jobId } = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  
    const handleBooking = async (e) => {
      e.preventDefault();
      const form = e.target;
      const specialNote = form.note.value;
  
      const bookingData = {
        tourId: tour._id,
        tourName: tour.name,
        price: tour.price,
        buyerName: user?.displayName,
        buyerEmail: user?.email,
        // bookingDate: new Date().toISOString(),
        specialNote,
        status: "pending"
      };
  
    //  console.log(bookingData)

      axios
      .post("${import.meta.env.VITE_API_URL}/myBookingTour", bookingData)
      .then((res) => {
        // console.log(res.data);
       if (res.data.insertedId || res.data.acknowledged) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500,
          });
        }
        navigate('/all-package')
      })
      .catch(() => {
       Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong while booking!",
    });
      });
     
    };

  return (
    <div>
      <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
        <div className="border bg-gray-900 p-6 rounded-lg w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">Book This Tour</h3>
          <form onSubmit={handleBooking}>
            <div className="mb-2">
              <label className="block">Tour Name</label>
              <input
                type="text"
                value={tour.name}
                readOnly
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-2">
              <label className="block">Price</label>
              <input
                type="text"
                value={`$${tour.price}`}
                readOnly
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-2">
              <label className="block">Your Name</label>
              <input
                type="text"
                value={user?.displayName}
                readOnly
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-2">
              <label className="block">Email</label>
              <input
                type="email"
                value={user?.email}
                readOnly
                className="w-full border rounded p-2"
              />
            </div>
            <div className="mb-4">
              <label className="block">Special Note</label>
              <textarea
                name="note"
                className="w-full border rounded p-2"
                placeholder="Optional note..."
              ></textarea>
            </div>
            <div className="flex justify-between">
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                Confirm Booking
              </button>
              <button type="button" onClick={() => setShowModal(false)} className="text-red-500">
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyBookingPackage;

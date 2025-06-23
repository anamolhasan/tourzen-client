import React from 'react'
import Swal from 'sweetalert2'
import useAuth from '../../hooks/useAuth'
import { useLoaderData, useNavigate } from 'react-router'
import axios from 'axios'

const UpdateTour = () => {
    const navigate = useNavigate()
    
    const {user} = useAuth()
    const { _id, contactNo, departureDate, departureLocation, destination, duration, name, packageDetails, photo, price } = useLoaderData();

const handleSubmit = (e) => {
  e.preventDefault();

  const form = e.target;
  const formData = new FormData(form);
  const updatedPackage = Object.fromEntries(formData.entries());

  const gideName = user?.displayName;
  const gideEmail = user?.email;
  const gidePhoto = user?.photoURL;

  const finalPackage = {
    ...updatedPackage,
    gideName,
    gideEmail,
    gidePhoto,
  };

  axios
    .put(`https://tour-zen-server-five.vercel.app/tours/${_id}`, finalPackage)
    .then((res) => {
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Tour package updated successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/dashboard/managePackage");
      } else {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Update failed or no changes detected.",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    })
    .catch((error) => {
      console.error("Update error:", error);
      Swal.fire({
        icon: "error",
        title: "Server error",
        text: "Something went wrong!",
      });
    });
};
  return (
    <div className="px-4 md:px-24 py-10 bg-white dark:bg-gray-600  text-black  min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 dark:text-white text-black">
        🌱 Update Tour Package
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/** Each input wrapped with dark support */}
          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="name"
               defaultValue={name}
              required
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Tour Name"
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="photo"
               defaultValue={photo}
              required
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Tour Image URL"
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="duration"
               defaultValue={duration}
              placeholder="Duration (e.g., 3 Days 2 Nights)"
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

           <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="date"
              name="departureDate"
               defaultValue={departureDate}
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="departureLocation"
               defaultValue={departureLocation}
              placeholder="Departure Location"
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="destination"
              placeholder="Destination"
               defaultValue={destination}
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="number"
              name="price"
              placeholder="Price (৳)"
               defaultValue={price}
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>
         

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="contactNo"
              placeholder="Contact No."
               defaultValue={contactNo}
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          

          
        </div>

        <div className="md:col-span-2">
          <textarea
            name="packageDetails"
            rows="5"
             defaultValue={packageDetails}
            placeholder="Detailed Description of the Tour Package"
            className="w-full bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 p-4 rounded mb-6"
            required
          ></textarea>
        </div>

        {/* Guide Info Preview */}
        <div className="md:col-span-2 flex items-center gap-4 bg-gray-100 dark:bg-gray-900 border text-black dark:text-white p-4 rounded-md">
          <img
            src={user?.photoURL}
            alt="Guide"
            className="w-16 h-16 rounded-full border-2 border-cyan-900"
          />

          <div>
            <p className="text-lg font-semibold">👨‍💼 Guide: {user?.displayName}</p>
            <p className="text-sm ">📧 Email : {user?.email}</p>
          </div>
        </div>

        <div className="md:col-span-2 mt-5">
          <button type="submit" className="btn btn-primary w-full py-3 font-semibold text-xl">
            📤 Update Tour Package
          </button>
        </div>

      </form>
    </div>
  )
}

export default UpdateTour
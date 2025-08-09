import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const AddPackage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const addPackage = Object.fromEntries(formData.entries());

    const gideName = user?.displayName;
    const gideEmail = user?.email;
    const gidePhoto = user?.photoURL;

    const finalPackage = {
      ...addPackage,
      gideName,
      gideEmail,
      gidePhoto,
    };

    axios
      .post("${import.meta.env.VITE_API_URL}/tours", finalPackage, {
        headers: {
          authorization: `Bearer ${user.accessToken}`,
        },
      })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Tour package added successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleaddTour = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your package has been saved",
      showConfirmButton: false,
      timer: 1500,
    });
    navigate("/dashboard/managePackage");
  };

  return (
    <div className="px-4 md:px-24 py-10 min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8">
        🌱 Add Tour Package
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="name"
            required
            className="input input-bordered w-full"
            placeholder="Tour Name"
          />
          <input
            type="text"
            name="photo"
            required
            className="input input-bordered w-full"
            placeholder="Tour Image URL"
          />
          <input
            type="text"
            name="duration"
            required
            className="input input-bordered w-full"
            placeholder="Duration (e.g., 3 Days 2 Nights)"
          />
          <input
            type="date"
            name="departureDate"
            required
            className="input input-bordered w-full"
          />
          <input
            type="text"
            name="departureLocation"
            required
            className="input input-bordered w-full"
            placeholder="Departure Location"
          />
          <input
            type="text"
            name="destination"
            required
            className="input input-bordered w-full"
            placeholder="Destination"
          />
          <input
            type="number"
            name="price"
            required
            className="input input-bordered w-full"
            placeholder="Price (৳)"
          />
          <input
            type="text"
            name="contactNo"
            required
            className="input input-bordered w-full"
            placeholder="Contact No."
          />
        </div>

        <textarea
          name="packageDetails"
          rows="5"
          required
          placeholder="Detailed Description of the Tour Package"
          className="textarea textarea-bordered w-full mb-6"
        ></textarea>

        {/* Guide Info Preview */}
        <div className="flex items-center gap-4 bg-base-200 p-4 rounded-md mb-6">
          <img
            src={user?.photoURL}
            alt="Guide"
            className="w-16 h-16 rounded-full border-2 border-cyan-900"
          />
          <div>
            <p className="text-lg font-semibold">
              👨‍💼 Guide: {user?.displayName}
            </p>
            <p className="text-sm">📧 Email: {user?.email}</p>
          </div>
        </div>

        <button
          onClick={handleaddTour}
          type="submit"
          className="btn btn-primary w-full py-3 text-xl"
        >
          📤 Submit Tour Package
        </button>
      </form>
    </div>
  );
};

export default AddPackage;

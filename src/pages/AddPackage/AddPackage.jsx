import React from "react";

const AddPackage = () => {
  return (
    <div className="px-4 md:px-24 py-10 bg-white dark:bg-gray-600  text-black  min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-8 text-black">
        🌱 Add Tour Package
      </h2>

      <form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/** Each input wrapped with dark support */}
          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="name"
              required
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Tour Name"
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="photo"
              required
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              placeholder="Images URL"
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="duration"
              placeholder="Duration (e.g., 3 Days 2 Nights)"
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="departureLocation"
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
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="number"
              name="price"
              placeholder="Price (৳)"
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>
          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="date"
              name="departureDate"
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          <fieldset className="bg-base-200 dark:bg-gray-800 border border-base-300 dark:border-gray-700 rounded-box p-4">
            <input
              type="text"
              name="contactNo"
              placeholder="Contact No."
              className="input w-full bg-white dark:bg-gray-700 text-black dark:text-white"
              required
            />
          </fieldset>

          

          
        </div>

        <div className="md:col-span-2">
          <textarea
            name="packageDetails"
            rows="5"
            placeholder="Detailed Description of the Tour Package"
            className="w-full bg-white dark:bg-gray-700 text-black dark:text-white border border-gray-300 dark:border-gray-600 p-4 rounded mb-6"
            required
          ></textarea>
        </div>

        {/* Guide Info Preview */}
        <div className="md:col-span-2 flex items-center gap-4 bg-gray-100 dark:bg-gray-900 border text-black dark:text-white p-4 rounded-md">
          <img
            src=""
            alt="Guide"
            className="w-16 h-16 rounded-full border-2 border-cyan-900"
          />

          <div>
            <p className="text-lg font-semibold">👨‍💼 Guide: </p>
            <p className="text-sm ">📧 Email : </p>
          </div>
        </div>

        <div className="md:col-span-2 mt-5">
          <button type="submit" className="btn btn-primary w-full py-3 font-semibold text-xl">
            📤 Submit Tour Package
          </button>
        </div>

      </form>
    </div>
  );
};

export default AddPackage;

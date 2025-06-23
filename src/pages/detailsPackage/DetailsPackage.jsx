import {  useLoaderData, useNavigate } from 'react-router';
import { useContext, useState } from 'react';

import { AuthContext } from '../../provider/AuthContext';
import MyBookingPackage from '../MyBookings/MyBookingPackage';

const DetailsPackage = () => {
    const { user } = useContext(AuthContext);
    const tour = useLoaderData();
    const navigate = useNavigate()


  const [showModal, setShowModal] = useState(false);

  // console.log(tour)

 

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <img src={tour.photo} alt={tour.name} className="rounded-lg w-full mb-4" />
      <h2 className="text-3xl font-bold">{tour.name}</h2>

      <div className="my-4 space-y-1">
        <p><strong>Guide:</strong> {tour.gideName}</p>
        <p><strong>Contact:</strong> {tour.contactNo}</p>
        <p><strong>Duration:</strong> {tour.duration}</p>
        <p><strong>Price:</strong> ${tour.price}</p>
        <p><strong>Bookings:</strong> {tour.bookingCount}</p>
        <p><strong>Departure:</strong> {tour.departureLocation} ({tour.departureDate})</p>
        <p><strong>Destination:</strong> {tour.destination}</p>
        <p className="mt-2"><strong>Description:</strong> {tour.packageDetails}</p>
      </div>

      <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Book Now
      </button>

      {
        user ? <>
          {showModal &&  (
        <>
        <MyBookingPackage setShowModal={setShowModal} tour={tour}/>
        
        </>
      )}
        </> : navigate('/login')
      }
    </div>
  );
};

export default DetailsPackage;

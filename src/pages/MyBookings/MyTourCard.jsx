import React, { use } from 'react';
import BookingCard from './BookingCard';

const MyTourCard = ({ myBookingAllTour }) => {
  const myTours = use(myBookingAllTour)
  console.log(myTours)
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Total Tours: {myTours.length}</h2>
     <div className='grid grid-cols-1 sm:grid-cols-3 gap-5'>
        {myTours.map((tour, index) => (
        <BookingCard key={index} booking={tour} />
      ))}
     </div>
    </div>
  );
};

export default MyTourCard;

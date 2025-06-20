import React from "react";

const BookingCard = ({ booking }) => {
  const {
    tourName,
    bookingDate,
    buyerName,
    buyerEmail,
    price,
    specialNote,
    status,
    contactNo,
  } = booking;

  const formattedDate = new Date(bookingDate).toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <div className="card bg-base-100 shadow-xl border border-gray-200 w-full max-w-md mb-4">
      <div className="card-body">
        <h2 className="card-title text-xl font-bold text-primary">{tourName}</h2>
        <p><span className="font-semibold">Booked By:</span> {buyerName} ({buyerEmail})</p>
        <p><span className="font-semibold">Price:</span> ৳{price}</p>
        <p><span className="font-semibold">Special Note:</span> {specialNote}</p>
        <p><span className="font-semibold">Booking Date:</span> {formattedDate}</p>
        <p><span className="font-semibold">contactNo:</span> {contactNo}</p>
        <p><span className="font-semibold">Status:</span> 
          <span className={`ml-1 font-semibold uppercase ${status === "pending" ? "text-yellow-500" : "text-green-500"}`}>
            {status}
          </span>
        </p>
        <div className="card-actions justify-between pt-3">
          <button className="btn btn-sm btn-outline btn-primary">View Details</button>
          <button className="btn btn-sm btn-outline btn-primary">cancel tour</button>
          <button className="btn btn-sm btn-outline btn-primary">resit now</button>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;

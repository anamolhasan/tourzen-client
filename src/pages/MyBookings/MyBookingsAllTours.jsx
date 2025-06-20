import React, { Suspense } from "react";

import MyTourCard from "./MyTourCard";
import Loading from "../../components/shared/Loading";
// import useAuth from "../../hooks/useAuth";
import { myBookingAllTour } from "../../api/bookingService";
import useAuth from "../../hooks/useAuth";

const MyBookingsAllTours = () => {
  const {user} = useAuth()
  // console.log(user)
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <MyTourCard myBookingAllTour={myBookingAllTour(user?.email)}/>
      </Suspense>
    </div>
  );
};

export default MyBookingsAllTours;

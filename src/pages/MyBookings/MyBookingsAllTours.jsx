import React, { Suspense } from "react";

import MyTourCard from "./MyTourCard";
import Loading from "../../components/shared/Loading";
// import useAuth from "../../hooks/useAuth";
// import { myBookingAllTour } from "../../api/bookingService";
import useAuth from "../../hooks/useAuth";
import useBookingApi from "../../api/useBookingApi";

const MyBookingsAllTours = () => {
  const {user} = useAuth()
  console.log(user)
  const {myBookingAllTour} = useBookingApi()
  return (
    <div>
      <Suspense fallback={<Loading />}>
        {/* <MyTourCard myBookingAllTour={myBookingAllTour(user?.email)}/> */}
        <MyTourCard myBookingAllTour={myBookingAllTour(user?.email)}/>
      </Suspense>
    </div>
  );
};

export default MyBookingsAllTours;


import React from "react";
import TourList from "./TourList";
import Loading from "../../components/shared/Loading";
import useAuth from "../../hooks/useAuth";
import useTourApi from "../../api/useTourApi";

const ManagePackages = () => {
  const { user, loading } = useAuth();
  const { tourManagementByPromise } = useTourApi();

  if (loading) return <Loading />;

  return (
    <div>
      <h2 className="text-3xl font-bold">My Posted Tours</h2>
      <TourList tourManagementByPromise={tourManagementByPromise} email={user?.email} />
    </div>
  );
};

export default ManagePackages;

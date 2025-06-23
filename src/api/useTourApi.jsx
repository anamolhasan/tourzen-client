import useAxiosSecure from "../hooks/useAxiosSecure";

const useTourApi = () => {
  const axiosSecure = useAxiosSecure();

  const tourManagementByPromise = (email) => {
    return axiosSecure
      .get(`/tours/myBooking?email=${email}`)
      .then((res) => res.data);
  };

  return { tourManagementByPromise };
};

export default useTourApi;

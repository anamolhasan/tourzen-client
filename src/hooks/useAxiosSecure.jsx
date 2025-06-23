import axios from "axios";
import useAuth from "./useAuth";

const useAxiosSecure = () => {
  const { user, logOutUser } = useAuth();

  const axiosSecure = axios.create({
    baseURL: "http://localhost:3000",
  });

  // Attach token to every request
  axiosSecure.interceptors.request.use((config) => {
    if (user?.accessToken) {
      config.headers.authorization = `Bearer ${user.accessToken}`;
    }
    return config;
  });

  // Auto logout if unauthorized
  axiosSecure.interceptors.response.use(
    (response) => response,
    (error) => {
      if (error?.response?.status === 401 || error?.response?.status === 403) {
        logOutUser()
          .then(() => console.log("Logged out due to unauthorized"))
          .catch(console.error);
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;

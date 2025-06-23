import React from 'react'
import useAxiosSecure from '../hooks/useAxiosSecure'

const useBookingApi = () => {
    const axiosSecure = useAxiosSecure()

    const myBookingAllTour = email => {
        return axiosSecure.get(`/myBookingTour?email=${email}`)
              .then(res => res.data)
    }
  return {myBookingAllTour}
}

export default useBookingApi
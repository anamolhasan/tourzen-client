export const myBookingAllTour = (email, accessToken) => {
   return fetch(`${import.meta.env.VITE_API_URL}/myBookingTour?email=${email}`, {
      headers:{
         authorization: `Bearer ${accessToken}`
      }
   })
      .then(res => res.json())
}
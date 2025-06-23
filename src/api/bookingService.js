export const myBookingAllTour = (email, accessToken) => {
   return fetch(`https://tour-zen-server-five.vercel.app/myBookingTour?email=${email}`, {
      headers:{
         authorization: `Bearer ${accessToken}`
      }
   })
      .then(res => res.json())
}
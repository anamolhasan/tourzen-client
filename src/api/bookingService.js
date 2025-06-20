export const myBookingAllTour = (email) => {
   return fetch(`http://localhost:3000/myBookingTour?email=${email}`)
      .then(res => res.json())
}
export const tourManagementByPromise = (email) => {
    return fetch(`http://localhost:3000/tours/myBooking?email=${email}`)
        .then(res => res.json())
}
export const tourManagementByPromise = (email, accessToken) => {
    return fetch(`http://localhost:3000/tours/myBooking?email=${email}`, {
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}

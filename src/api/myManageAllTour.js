export const tourManagementByPromise = (email, accessToken) => {
    return fetch(`https://tour-zen-server-five.vercel.app/tours/myBooking?email=${email}`, {
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}

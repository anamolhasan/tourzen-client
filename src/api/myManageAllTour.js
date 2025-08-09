export const tourManagementByPromise = (email, accessToken) => {
    return fetch(`${import.meta.env.VITE_API_URL}/tours/myBooking?email=${email}`, {
        headers:{
            authorization: `Bearer ${accessToken}`
        }
    })
        .then(res => res.json())
}

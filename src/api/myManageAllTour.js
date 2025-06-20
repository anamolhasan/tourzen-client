export const tourManagementByPromise = (email) => {
    return fetch(`http://localhost:3000/tours?email=${email}`)
        .then(res => res.json())
}
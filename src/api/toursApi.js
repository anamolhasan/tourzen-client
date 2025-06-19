export const tourCreatedByPromise = email => {
    return fetch(``,{
        credentials: 'include'
    })
    .then(res => res.json())
}
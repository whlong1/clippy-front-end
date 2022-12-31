const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

async function getProfiles(token) {
  const res = await fetch(`${BASE_URL}`,
    { headers: { Authorization: `Bearer ${token}` } },
  )
  return await res.json()
}

export { getProfiles }






// const baseQuery = fetchBaseQuery({
//   baseUrl: BASE_URL,
//   prepareHeaders: (headers, { getState }) => {
//     console.log(getState())
//     const token = getState().auth.token
//     // const token = getState()

//     console.log('Token:::::::', token)

//     // If we have a token set in state, let's assume that we should be passing it.
//     // if (token) {
//       headers.set('Authorization', `Bearer ${token}`)
//     // }

//     console.log('headers',headers)
//     return headers
//   },
// })



// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api`




// // Define our single API slice object
// export const profileApi = createApi({
//   // The cache reducer expects to be added at `state.api` (already default - this is optional)
//   reducerPath: 'people',
//   // All of our requests will have URLs starting with BASE_URL.
//   baseQuery: fetchBaseQuery({
//     baseUrl: BASE_URL,
//     prepareHeaders: (headers, { getState }) => {
//       console.log(getState())
//       const token = getState().auth.token
//       // const token = getState()

//       console.log('Token:::::::', token)

//       // If we have a token set in state, let's assume that we should be passing it.
//       if (token) {
//         headers.set('Authorization', `Bearer ${token}`)
//       }

//       console.log('headers', headers)
//       return headers
//     },
//   }),
//   // The "endpoints" represent operations and requests for this server
//   endpoints: builder => ({
//     // Endpoints can be queries, which return data for caching, 
//     // or mutations, which send an update to the server. 
//     // The `getProfiles` endpoint is a "query" operation that returns data.
//     getProfiles: builder.query({
//       // The URL for the request is 'BASE_URL/api/profles'
//       query: () => '/profiles'
//     })
//   })
// })

// // Export the auto-generated hook for the `getProfles` query endpoint
// export const { useGetProfilesQuery } = profileApi

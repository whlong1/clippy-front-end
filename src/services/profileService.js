// const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/profiles`

// async function getProfiles() {
//   const res = await fetch(BASE_URL)
//   return await res.json()
// }

// export { getProfiles }






// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api`



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

// Define our single API slice object
export const profileApi = createApi({
  // The cache reducer expects to be added at `state.api` (already default - this is optional)
  reducerPath: 'api',
  // All of our requests will have URLs starting with BASE_URL.
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
    prepareHeaders: (headers, { getState }) => {
      console.log(getState())
      const token = getState().auth.token
      // const token = getState()

      console.log('Token:::::::', token)

      // If we have a token set in state, let's assume that we should be passing it.
      // if (token) {
      headers.set('Authorization', `Bearer ${token}`)
      // }

      console.log('headers', headers)
      return headers
    },
  }),
  // The "endpoints" represent operations and requests for this server
  endpoints: builder => ({
    // Endpoints can be queries, which return data for caching, 
    // or mutations, which send an update to the server. 
    // The `getPosts` endpoint is a "query" operation that returns data.
    getProfiles: builder.query({
      // The URL for the request is 'BASE_URL/api/posts'
      query: () => '/profiles'
    })
  })
})

// Export the auto-generated hook for the `getPosts` query endpoint
export const { useGetProfilesQuery } = profileApi

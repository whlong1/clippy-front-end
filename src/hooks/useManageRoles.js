import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'


const types = {
  'deny': cohortService.denyProfile,
  'approve': cohortService.approveProfile,
}

// cohortId, profileId (instance props)
// action (mutate props)
export const useManageRoles = (cohortId, profileId) => {
  const queryClient = useQueryClient()


  return useMutation({
    mutationFn: (action) => types[action.type](cohortId, profileId, action.payload),
    onSuccess: (response, { payload }) => {
      console.log('Server Response', response)
      console.log('Payload data:', payload)

      queryClient.setQueryData(
        ['people', cohortId],
        (state) => {
          // const { formerRole, newRole } = formData
          console.log('Current Cache State', state)

          // return {
          //   ...state,
          //   [newRole]: [...state[newRole], testObj],
          //   [formerRole]: state[formerRole].filter((p) => p._id !== profileId),
          // }
        }
      )

    },
    onError: (error) => console.log('Error!'),
  })
}






// ✅ use an object for multiple variables
// const mutation = useMutation(({ title, body }) => updateTodo(title, body))
// mutation.mutate({ title: 'hello', body: 'world' })



// onSuccess: (response, variables) => {
  //     console.log('On success variables', formData)
  //     queryClient.setQueryData(
  //       ['people', cohortId],
  //       (state) => {
  //         const { formerRole, newRole } = formData
  // console.log('Server Response', response)
  // console.log('Current Cache State', state)

  // const testObj = {
  //   lastName: "Long",
  //   firstName: "Hunter",
  //   preferredName: "Hunter",
  //   gitHubUserName: "whlong1",
  //   _id: "63b356998d56cdf63565ad45",
  //   email: "hunter.long@generalassemb.ly",
  // }

  // return {
  //   ...state,
  //   [newRole]: [...state[newRole], testObj],
  //   [formerRole]: state[formerRole].filter((p) => p._id !== profileId),
  // }
  // }
  // )
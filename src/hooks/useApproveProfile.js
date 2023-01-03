import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const useApproveProfile = (cohortId, profileId, formData) => {
  // console.log('useApproveProfile params:::', cohortId, profileId, formData)
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: () => cohortService.approveProfile(cohortId, profileId, formData),
    onSuccess: (response) => {
      queryClient.setQueryData(
        ['people', cohortId],
        (state) => {
          const { formerRole, newRole } = formData
          // console.log('Server Response', response)
          // console.log('Current Cache State', state)

          const testObj = {
            lastName: "Long",
            firstName: "Hunter",
            preferredName: "Hunter",
            gitHubUserName: "whlong1",
            _id: "63b356998d56cdf63565ad45",
            email: "hunter.long@generalassemb.ly",
          }

          return {
            ...state,
            [newRole]: [...state[newRole], testObj],
            [formerRole]: state[formerRole].filter((p) => p._id !== profileId),
          }
        }
      )
    },
    onError: (error) => console.log('Error!'),
  })
}
import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

const types = {
  'deny': cohortService.denyProfile,
  'approve': cohortService.approveProfile,
}

export const useManageRoles = (cohortId, profileId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (action) => types[action.type](cohortId, profileId, action.payload),
    onSuccess: (res, { payload }) => {
      console.log('Server response:', res)

      const queryKey = ['people', cohortId]

      const updateState = (state) => {
        const { profile, formerRole, newRole } = payload
        return {
          ...state,
          [newRole]: [...state[newRole], profile],
          [formerRole]: state[formerRole].filter((p) => p._id !== profileId),
        }
      }
      
      queryClient.setQueryData(queryKey, updateState)
    },
    onError: (error) => console.log('Error!'),
  })
}
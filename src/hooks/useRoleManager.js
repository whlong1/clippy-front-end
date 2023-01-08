import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const useRoleManager = (cohortId, personId) => {
  const queryClient = useQueryClient()

  const types = {
    deny: {
      service: cohortService.denyProfile,
      handleCache: (res, payload) => {
        const queryKey = ['people', cohortId]
        const { formerRole } = payload
        const updateState = (state) => {
          return { ...state, [formerRole]: state[formerRole].filter((p) => p._id !== personId) }
        }
        queryClient.setQueryData(queryKey, updateState)
      },
    },
    remove: {
      service: cohortService.removeProfile,
      handleCache: (res, payload) => {
        const queryKey = ['people', cohortId]
        const { person, formerRole, newRole } = payload
        const updateState = (state) => {
          return {
            ...state,
            [newRole]: [...state[newRole], person],
            [formerRole]: state[formerRole].filter((p) => p._id !== personId),
          }
        }
        queryClient.setQueryData(queryKey, updateState)
        queryClient.setQueryData(['person', person._id], (state) => ({ ...state, role: newRole }))
      }
    },
    approve: {
      service: cohortService.approveProfile,
      handleCache: (res, payload) => {
        const queryKey = ['people', cohortId]
        const { person, formerRole, newRole } = payload
        const updateState = (state) => {
          return {
            ...state,
            [newRole]: [...state[newRole], person],
            [formerRole]: state[formerRole].filter((p) => p._id !== personId),
          }
        }
        queryClient.setQueryData(queryKey, updateState)
        queryClient.setQueryData(['person', person._id], (state) => ({ ...state, role: newRole }))
      }
    },
    change: {
      // Might need to update profile by id cache as well?
      service: cohortService.changeRole,
      handleCache: (res, payload) => {
        const queryKey = ['people', cohortId]
        const { person, formerRole, newRole } = payload
        const updateState = (state) => {
          return {
            ...state,
            [newRole]: [...state[newRole], person],
            [formerRole]: state[formerRole].filter((p) => p._id !== personId),
          }
        }
        queryClient.setQueryData(queryKey, updateState)
        queryClient.setQueryData(['person', person._id], (state) => ({ ...state, role: newRole }))
      }
    },
  }

  return useMutation({
    mutationFn: (action) => types[action.type].service(cohortId, personId, action.payload),
    onSuccess: (res, action) => types[action.type].handleCache(res, action.payload),
    onError: (error) => console.log('Error!'),
  })
}
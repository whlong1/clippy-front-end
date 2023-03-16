import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as cohortService from '../services/cohortService'

export const useRoleManager = (cohortId, personId) => {
  const queryClient = useQueryClient()

  const types = {
    deny: {
      service: cohortService.denyProfile,
      handleCache: (res, payload) => {
        const queryKey = ['people', cohortId]
        queryClient.invalidateQueries({ queryKey: queryKey, type: 'all' })
        queryClient.invalidateQueries({ queryKey: ['cohorts'], type: 'all' })
        queryClient.invalidateQueries({ queryKey: ['person', personId], type: 'all' })
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
        const { person } = payload
        queryClient.invalidateQueries({ queryKey: queryKey, type: 'all' })
        queryClient.invalidateQueries({ queryKey: ['cohorts'], type: 'all' })
        queryClient.invalidateQueries({ queryKey: ['person', person._id], type: 'all' })
      }
    },
    change: {
      service: cohortService.changeRole,
      handleCache: (res, payload) => {
        const queryKey = ['people', cohortId]
        const { person, newRole } = payload
        queryClient.invalidateQueries({ queryKey: queryKey, type: 'all' })
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
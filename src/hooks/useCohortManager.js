import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as adminService from '../services/adminService'
import * as cohortService from '../services/cohortService'

export const useCohortManager = () => {
  const queryClient = useQueryClient()

  const types = {
    create: {
      service: cohortService.create,
      handleCache: (res, payload) => {
        const queryKey = ['cohorts']
        queryClient.setQueryData(queryKey, (state) => [res, ...state])
      }
    },
    update: {
      service: cohortService.update,
      handleCache: (res, payload) => {
        const queryKey = ['cohorts']
        queryClient.invalidateQueries({ queryKey: queryKey, type: 'all' })
      }
    },
    initial: {
      service: adminService.createCohortAndOnboardAdmin,
      handleCache: (res, payload) => {
        // const queryKey = ['cohorts']
        // queryClient.invalidateQueries({ queryKey: queryKey, type: 'all' })
      }
    }

  }

  return useMutation({
    mutationFn: (action) => types[action.type].service(action.payload),
    onSuccess: (res, action) => types[action.type].handleCache(res, action.payload),
    onError: (error) => console.log('Error!'),
  })
}
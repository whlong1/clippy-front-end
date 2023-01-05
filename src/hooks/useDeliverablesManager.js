import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

const types = {
  'create': deliverableService.createDeliverable,
  'remove': deliverableService.deleteDeliverable,
  'grade': deliverableService.gradeStudentDeliverable,
  'submit': deliverableService.submitStudentDeliverable,
}

export const useDeliverablesManager = (cohortId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (action) => types[action.type](action.payload),
    onSuccess: (res, { payload }) => {
      console.log('Payload:', payload)
      console.log('Server response:', res)
      const queryKey = ['deliverables', cohortId]

      const updateState = (state) => {
        return [
          res,
          ...state,
        ]
      }

      queryClient.setQueryData(queryKey, updateState)
    },
    onError: (error) => console.log('Error!'),
  })
}
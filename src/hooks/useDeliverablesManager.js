import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

export const useDeliverablesManager = (cohortId) => {
  const queryClient = useQueryClient()

  const types = {
    create: {
      service: deliverableService.createDeliverable,
      handleCache: (res, payload) => {
        const queryKey = ['deliverables', cohortId]
        const updateState = (state) => [res, ...state]
        queryClient.setQueryData(queryKey, updateState)
      },
    },
    remove: {
      service: deliverableService.deleteDeliverable,
      handleCache: (res, payload) => {
        const { deliverableId } = payload
        const queryKey = ['deliverables', cohortId]
        const updateState = (state) => state.filter((d) => d._id !== deliverableId)
        queryClient.setQueryData(queryKey, updateState)
      },
    },
    grade: {
      service: deliverableService.gradeStudentDeliverable,
      handleCache: (res, payload) => {
        console.log('PAYLOAD', payload)
        const { deliverableId } = payload
        // Double check that list is updated correctly.
        // Update this deliverable: queryKey: ['deliverable', deliverableId]
        const detailsQueryKey = ['studentDeliverable', res._id]
        queryClient.setQueryData(detailsQueryKey, { ...payload, ...res })

        // Test
        queryClient.setQueryData(['deliverable', deliverableId], (state) => {
          console.log('STATE', state)
        })
      },
    },
    submit: {
      service: deliverableService.submitStudentDeliverable,
      handleCache: (res, payload) => {
        const listQueryKey = ['studentDeliverables', cohortId]
        const detailsQueryKey = ['studentDeliverable', res._id]

        const updateListState = (prev) => prev.map((sd) => {
          return sd._id === res._id ? { ...sd, ...res } : sd
        })

        queryClient.setQueryData(listQueryKey, updateListState)
        queryClient.setQueryData(detailsQueryKey, { ...payload, ...res })
      },
    },
  }

  return useMutation({
    mutationFn: (action) => types[action.type].service(action.payload),
    onSuccess: (res, action) => types[action.type].handleCache(res, action.payload),
    onError: (error) => console.log('Error!'),
  })
}
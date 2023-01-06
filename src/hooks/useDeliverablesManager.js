import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

export const useDeliverablesManager = (cohortId) => {
  const queryClient = useQueryClient()

  const types = {
    create: {
      service: deliverableService.createDeliverable,
      handleCache: (payload, res) => {
        const queryKey = ['deliverables', cohortId]
        const updateState = (state) => [res, ...state]
        queryClient.setQueryData(queryKey, updateState)
      },
    },
    remove: {
      service: deliverableService.deleteDeliverable,
      handleCache: (payload, res) => {
        const { deliverableId } = payload
        const queryKey = ['deliverables', cohortId]
        const updateState = (state) => state.filter((d) => d._id !== deliverableId)
        queryClient.setQueryData(queryKey, updateState)
      },
    },
    grade: {
      service: deliverableService.gradeStudentDeliverable,
      handleCache: (payload, res) => {
        // Double check that list is updated correctly.
        const detailsQueryKey = ['studentDeliverable', res._id]
        queryClient.setQueryData(detailsQueryKey, { ...payload, ...res, profile: payload.profile })
      },
    },
    submit: {
      service: deliverableService.submitStudentDeliverable,
      handleCache: (payload, res) => {
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
    onSuccess: (res, action) => types[action.type].handleCache(action.payload, res),
    onError: (error) => console.log('Error!'),
  })
}
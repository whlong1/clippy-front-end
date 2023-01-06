import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

const serviceHandler = {
  create: deliverableService.createDeliverable,
  remove: deliverableService.deleteDeliverable,
  grade: deliverableService.gradeStudentDeliverable,
  submit: deliverableService.submitStudentDeliverable,
}

export const useDeliverablesManager = (cohortId) => {
  const queryClient = useQueryClient()

  const cacheHandler = {
    create: (payload, res) => {
      const queryKey = ['deliverables', cohortId]
      const updateState = (state) => [res, ...state]
      queryClient.setQueryData(queryKey, updateState)
    },
    remove: (payload, res) => {
      const { deliverableId } = payload
      const queryKey = ['deliverables', cohortId]
      const updateState = (state) => state.filter((d) => d._id !== deliverableId)
      queryClient.setQueryData(queryKey, updateState)
    },
    grade: (payload, res) => {
      // const { studentDeliverableId } = payload
      // const queryKey = ['studentDeliverable', studentDeliverableId]
      // const listQueryKey = ['studentDeliverables', cohortId]
      // const detailsQueryKey = ['studentDeliverable', res._id]
    },
    submit: (payload, res) => {
      const listQueryKey = ['studentDeliverables', cohortId]
      const detailsQueryKey = ['studentDeliverable', res._id]

      const updateListState = (prev) => prev.map((sd) => {
        return sd._id === res._id ? { ...sd, ...res } : sd
      })

      queryClient.setQueryData(listQueryKey, updateListState)
      queryClient.setQueryData(detailsQueryKey, { ...payload, ...res })
    },
  }

  return useMutation({
    mutationFn: (action) => serviceHandler[action.type](action.payload),
    onSuccess: (res, action) => cacheHandler[action.type](action.payload, res),
    onError: (error) => console.log('Error!'),
  })
}


// Audit keys
// Figure out async
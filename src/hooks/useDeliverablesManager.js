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
    },
    submit: (payload, res) => {
      // const { studentDeliverableId } = payload
      // const queryKey = ['studentDeliverable', studentDeliverableId]
    },
  }

  return useMutation({
    mutationFn: (action) => serviceHandler[action.type](action.payload),
    onSuccess: (res, action) => cacheHandler[action.type](action.payload, res),
    onError: (error) => console.log('Error!'),
  })
}












// It seems like [deliverables + cohortId] can be used as a queryKey for both instructors and students. 
// This would make it easier for students to use the useDeliverablesManager.
// When a student submits a deliverable, need to update the show view they are on. 
// we also need to update the list of studentDeliverables show in their side panel.
// Both instructors and students make use of the useShowStudentDeliverable hook



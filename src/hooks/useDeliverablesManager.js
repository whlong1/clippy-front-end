import { useMutation, useQueryClient } from '@tanstack/react-query'

import * as profileService from '../services/profileService'
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
        const { deliverableId } = payload
        // Helper function
        const handleNestedStudents = (data) => data.students.map((s) => {
          return s._id === res._id ? { ...s, ...res } : s
        })
        // Update studentDeliverable detail
        queryClient.setQueryData(['studentDeliverable', res._id], { ...payload, ...res })
        // Update deliverable detail
        queryClient.setQueryData(['deliverable', deliverableId], (state) => {
          return { ...state, students: handleNestedStudents(state) }
        })
        // Update deliverables list
        queryClient.setQueryData(['deliverables', cohortId], (state) => state.map((d) => {
          return d._id === deliverableId ? { ...d, students: handleNestedStudents(d) } : d
        }))

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

    updateStudentSquad: {
      // action.payload = {profileId, data}
      service: profileService.updateStudentSquad,
      handleCache: (res, payload) => {
        console.log(res, payload)
        // const listQueryKey = ['studentDeliverables', cohortId]
        // const detailsQueryKey = ['studentDeliverable', res._id]

        // const updateListState = (prev) => prev.map((sd) => {
        //   return sd._id === res._id ? { ...sd, ...res } : sd
        // })

        // queryClient.setQueryData(listQueryKey, updateListState)
        // queryClient.setQueryData(detailsQueryKey, { ...payload, ...res })
      },
    },

  }

  return useMutation({
    mutationFn: (action) => types[action.type].service(action.payload),
    onSuccess: (res, action) => types[action.type].handleCache(res, action.payload),
    onError: (error) => console.log(error),
  })
}
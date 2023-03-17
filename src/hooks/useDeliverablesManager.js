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
        // queryClient.invalidateQueries({ queryKey: ['studentDeliverable', res._id], type: 'active' })

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
        // Double check these keys, is the first one necessary?
        const listQueryKey = ['studentDeliverables', cohortId]
        const detailsQueryKey = ['studentDeliverable', res._id]

        const updateListState = (prev) => prev.map((sd) => {
          return sd._id === res._id ? { ...sd, ...res } : sd
        })

        //1
        // queryClient.setQueryData(listQueryKey, updateListState)
        //2
        // ['deliverables', cohortId]
        queryClient.invalidateQueries({ queryKey: listQueryKey, type: 'all' })
        queryClient.invalidateQueries({ queryKey: ['deliverables', cohortId], type: 'all' })

        // queryClient.setQueryData(detailsQueryKey, { ...payload, ...res })
        queryClient.invalidateQueries({ queryKey: detailsQueryKey, type: 'all' })
      },
    },
    updateStudentSquad: {
      service: profileService.updateStudentSquad,
      handleCache: (res, payload) => {
        const { profileId, deliverableId } = payload
        const queryKey = ['deliverable', deliverableId]

        const handleNestedStudents = (d) => d.students.map((s) =>
          s.profileId === profileId ? { ...s, squad: res.squad } : s
        )

        const updateState = (state) => {
          return { ...state, students: handleNestedStudents(state) }
        }

        queryClient.setQueryData(queryKey, updateState)

        // Triggers refetch for inactive deliverable queries (might not be necessary)
        // type: 'all' invalidates all deliverable queries (active & inactive)
        queryClient.invalidateQueries({ queryKey: ['deliverable'], type: 'inactive' })
      },
    },
    markAllComplete: {
      service: deliverableService.markAllDeliverablesComplete,
      handleCache: (res, payload) => {
        const { deliverableId } = payload
        const listQueryKey = ['deliverables', cohortId]
        const detailsQueryKey = ['deliverable', deliverableId]
        queryClient.setQueryData(listQueryKey, (state) => {
          return state.map((d) => d._id === deliverableId ? res : d)
        })
        queryClient.setQueryData(detailsQueryKey, (state) => {
          return { ...state, students: res.students }
        })
      },
    },
  }

  return useMutation({
    mutationFn: (action) => types[action.type].service(action.payload),
    onSuccess: (res, action) => types[action.type].handleCache(res, action.payload),
    onError: (error) => console.log(error),
  })
}
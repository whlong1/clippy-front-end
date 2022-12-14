import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as attendanceService from '../services/attendanceService'

export const useAttendanceManager = (cohortId) => {
  const queryClient = useQueryClient()
  const types = {
    create: {
      service: attendanceService.createAttendance,
      handleCache: (res, payload) => {
        const queryKey = ['attendance', cohortId]
        queryClient.setQueryData(queryKey, (state) => [res, ...state])
      }
    },
    update: {
      service: attendanceService.updateAttendance,
      handleCache: (res, payload) => {
        const queryKey = ['attendance', cohortId]
        // No direct cache handling necessary at the moment
        queryClient.setQueryData(queryKey, state => state)
      }
    },
    remove: {
      service: attendanceService.deleteAttendance,
      handleCache: (res, payload) => {
        const queryKey = ['attendance', cohortId]
        const filterListState = (state) => state.filter((a) => {
          return a._id !== res._id
        })
        queryClient.setQueryData(queryKey, filterListState)
      }
    },
  }

  return useMutation({
    mutationFn: (action) => types[action.type].service(action.payload),
    onSuccess: (res, action) => types[action.type].handleCache(res, action.payload),
    onError: (error) => console.log('Error!'),
  })
}
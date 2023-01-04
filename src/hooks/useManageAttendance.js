import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as attendanceService from '../services/attendanceService'

const types = {
  'create': attendanceService.createAttendance,
  'update': attendanceService.updateAttendance,
  'remove': attendanceService.deleteAttendance,
}

export const useManageAttendance = (cohortId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (action) => types[action.type](action.payload),
    onSuccess: ({ res }, { payload }) => {
      console.log('Payload:', payload)
      console.log('Server response:', res)
      const queryKey = ['attendance', cohortId]

      const updateState = (state) => {
        return {
          res,
          ...state,
        }
      }

      queryClient.setQueryData(queryKey, updateState)
    },
    onError: (error) => console.log('Error!'),
  })
}
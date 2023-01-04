import { useMutation, useQueryClient } from '@tanstack/react-query'
import * as attendanceService from '../services/attendanceService'

const types = {
  'create': attendanceService.create,
  'update': attendanceService.updateAttendance,
  'remove': attendanceService.deleteAttendance,
}

export const useManageAttendance = (cohortId, attendanceId) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (action) => types[action.type](),
    onSuccess: (res, { payload }) => {
      console.log('Server response:', res)
      const queryKey = ['attendance', cohortId]

      const updateState = (state) => {
        return {
          ...state,
        }
      }

      queryClient.setQueryData(queryKey, updateState)
    },
    onError: (error) => console.log('Error!'),
  })
}
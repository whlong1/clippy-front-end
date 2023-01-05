import { useQuery } from '@tanstack/react-query'
import * as attendanceService from '../services/attendanceService'

export const useShowAttendance = (attendanceId) => {
  const { data: attendance, status } = useQuery({
    queryKey: ['attendanceDetails', attendanceId],
    queryFn: () => attendanceService.showAttendance(attendanceId)
  })
  return { attendance, status }
}
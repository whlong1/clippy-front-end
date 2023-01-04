import { useQuery } from '@tanstack/react-query'
import * as attendanceService from '../services/attendanceService'

export const useAttendanceDetails = (attendanceId) => {
  const { data: attendanceDetails, status } = useQuery({
    queryKey: ['attendanceDetails', attendanceId],
    queryFn: () => attendanceService.showAttendance(attendanceId)
  })
  return { attendanceDetails, status }
}
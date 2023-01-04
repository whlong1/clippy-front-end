import { useQuery } from '@tanstack/react-query'
import * as attendanceService from '../services/attendanceService'

export const useAttendance = (cohortId) => {
  const { data: attendance, status } = useQuery({
    queryKey: ['attendance', cohortId],
    queryFn: () => attendanceService.indexAttendance(cohortId)
  })

  return { attendance, status }
}

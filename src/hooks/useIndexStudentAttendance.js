import { useQuery } from '@tanstack/react-query'
import * as profileService from '../services/profileService'

// Student hook
export const useIndexStudentAttendance = (cohortId, profileId) => {
  const { data: attendance, status } = useQuery({
    queryKey: ['studentAttendance', profileId],
    queryFn: () => profileService.getAllMyAttendance(cohortId, profileId)
  })

  return { attendance, status }
}
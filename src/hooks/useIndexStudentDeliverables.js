import { useQuery } from '@tanstack/react-query'
import * as profileService from '../services/profileService'

// Student hook
// Should we used multiple queryKeys?
// cohortId might be necessary if students wish to switch cohorts
// Should profileId be used as well?

// Only Students need access to this hook. 
// Retrieves a single student's studentDeliverables
export const useIndexStudentDeliverables = (cohortId, profileId) => {
  const { data: studentDeliverables, status } = useQuery({
    queryKey: ['studentDeliverables', cohortId],
    queryFn: () => profileService.getAllMyDeliverables(cohortId, profileId)
  })

  return { studentDeliverables, status }
}
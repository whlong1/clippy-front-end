import { useQuery } from '@tanstack/react-query'
import * as profileService from '../services/profileService'

// Student hook
// Should we used multiple queryKeys?
// cohortId might be necessary if students wish to switch cohorts
export const useIndexStudentDeliverables = (cohortId, profileId) => {
  const { data: myDeliverables, status } = useQuery({
    queryKey: ['myDeliverables', cohortId],
    queryFn: () => profileService.getAllMyDeliverables(cohortId, profileId)
  })

  return { myDeliverables, status }
}

import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

// Student hook
// What id should we used for the queryKey?
// service uses cohortId as query string
export const useMyDeliverables = (cohortId) => {
  const { data: myDeliverables, status } = useQuery({
    queryKey: ['myDeliverables', cohortId],
    queryFn: () => deliverableService.indexDeliverables(cohortId)
  })

  return { myDeliverables, status }
}

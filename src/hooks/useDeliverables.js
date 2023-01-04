import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

export const useDeliverables = (cohortId) => {
  const { data: deliverables, status } = useQuery({
    queryKey: ['deliverables', cohortId],
    queryFn: () => deliverableService.indexDeliverables(cohortId)
  })

  return { deliverables, status }
}

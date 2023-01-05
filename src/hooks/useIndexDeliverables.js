import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

export const useIndexDeliverables = (cohortId) => {
  const { data: deliverables, status } = useQuery({
    queryKey: ['deliverables', cohortId],
    queryFn: () => deliverableService.indexDeliverables(cohortId)
  })

  return { deliverables, status }
}

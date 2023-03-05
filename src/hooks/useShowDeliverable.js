import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

export const useShowDeliverable = (deliverableId) => {
  const { data: deliverable, status } = useQuery({
    queryKey: ['deliverable', deliverableId],
    queryFn: () => deliverableService.showDeliverable(deliverableId),
  })
  return { deliverable, status }
}
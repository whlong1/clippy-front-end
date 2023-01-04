import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

export const useDeliverableDetails = (deliverableId) => {
  const { data: deliverableDetails, status } = useQuery({
    queryKey: ['deliverableDetails', deliverableId],
    queryFn: () => deliverableService.showDeliverable(deliverableId)
  })
  return { deliverableDetails, status }
}
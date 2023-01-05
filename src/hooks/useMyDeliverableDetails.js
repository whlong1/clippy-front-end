import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

// Student hook
export const useMyDeliverableDetails = (studentDeliverableId) => {
  const { data: myDeliverableDetails, status } = useQuery({
    queryKey: ['myDeliverableDetails', studentDeliverableId],
    queryFn: () => deliverableService.showStudentDeliverable(studentDeliverableId)
  })

  return { myDeliverableDetails, status }
}
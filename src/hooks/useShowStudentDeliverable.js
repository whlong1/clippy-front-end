import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

// Both Instructors and Students will make use of this hook
export const useShowStudentDeliverable = (studentDeliverableId) => {
  const { data: studentDeliverable, status } = useQuery({
    queryKey: ['studentDeliverable', studentDeliverableId],
    queryFn: () => deliverableService.showStudentDeliverable(studentDeliverableId)
  })

  return { studentDeliverable, status }
}
import { useQuery } from '@tanstack/react-query'
import * as deliverableService from '../services/deliverableService'

export const useStudentDeliverable = (studentDeliverableId) => {
  const { data: studentDeliverable, status } = useQuery({
    queryKey: ['studentDeliverable', studentDeliverableId],
    queryFn: () => deliverableService.showStudentDeliverable(studentDeliverableId)
  })

  return { studentDeliverable, status }
}

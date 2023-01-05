import { useQuery } from '@tanstack/react-query'
// import * as profileService from '../services/profileService'
import * as deliverableService from '../services/deliverableService'
// router.get('/:sdId/view', deliverablesCtrl.showStudentDeliverable)

// Student hook
// Should we used multiple queryKeys?
// cohortId might be necessary if students wish to switch cohorts
export const useMyDeliverableDetails = (studentDeliverableId) => {
  const { data: myDeliverableDetails, status } = useQuery({
    queryKey: ['myDeliverableDetails', studentDeliverableId],
    queryFn: () => deliverableService.showStudentDeliverable(studentDeliverableId)
  })

  return { myDeliverableDetails, status }
}

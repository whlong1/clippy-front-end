import { useQuery } from '@tanstack/react-query'
import * as profileService from '../services/profileService'

export const useShowPerson = (cohortId, profileId) => {
  const { data: person, status } = useQuery({
    queryKey: ['person', profileId],
    queryFn: () => profileService.show(cohortId, profileId)
  })
  return { person, status }
}
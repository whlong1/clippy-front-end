import { useQuery } from '@tanstack/react-query'
import * as profileService from '../services/profileService'

export const useShowPerson = (profileId) => {
  const { data: person, status } = useQuery({
    queryKey: ['personDetails', profileId],
    queryFn: () => profileService.show(profileId)
  })
  return { person, status }
}
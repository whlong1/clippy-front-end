import { useQuery } from '@tanstack/react-query'
import * as profileService from '../services/profileService'

export const useProfileDetails = (profileId) => {
  const { data: profile, status } = useQuery({
    queryKey: ['profileDetails', profileId],
    queryFn: () => profileService.show(profileId)
  })
  return { profile, status }
}
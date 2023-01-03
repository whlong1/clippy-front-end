import { useQuery } from 'react-query'
import * as profileService from '../services/profileService'

export const useProfileDetails = (profileId) => {
  const { data: profile, status } = useQuery(
    ['profileDetails', profileId], () => profileService.show(profileId)
  )
  return { profile, status }
}

import { useQuery } from '@tanstack/react-query'
import * as profileService from '../services/profileService'

export const useProfiles = () => {
  const { data: profiles, status } = useQuery({
    queryKey: ['profiles'],
    queryFn: () => profileService.index()
  })
  return { profiles, status }
}
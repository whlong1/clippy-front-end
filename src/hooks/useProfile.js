import { useEffect, useState } from 'react'
import { useToken } from './useToken'
import * as profileService from '../services/profileService'

// ======== Not being used (folded into useAuth) ======== 
export const useProfile = (user) => {
  const tokenError = useToken(user)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const getMyProfile = async () => {
      try {
        const res = await profileService.getMyProfile()
        if (res.error) throw Error(res.error)
        setProfile(res)
      } catch (error) {
        console.log(error)
      }
    }

    if (user && !tokenError) getMyProfile()

  }, [user, tokenError])

  return profile
}
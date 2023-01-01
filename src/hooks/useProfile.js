import { useEffect, useState } from 'react'
import { useToken } from './useToken'
import * as profileService from '../services/profileService'

// ======== Not being used (folded into useAuth) ======== 
export const useProfile = (user) => {
  const tokenError = useToken(user)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const getProfile = async () => {
      try {
        const res = await profileService.getProfile()
        if (res.error) throw Error(res.error)
        setProfile(res)
      } catch (error) {
        console.log(error)
      }
    }

    if (user && !tokenError) getProfile()

  }, [user, tokenError])

  return profile
}
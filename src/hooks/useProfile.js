import { useEffect, useState } from 'react'
import * as profileService from '../services/profileService'

export const useProfile = (user) => {
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
    if (user) getProfile()
  }, [user])

  return profile
}

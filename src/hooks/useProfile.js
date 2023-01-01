import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import * as profileService from '../services/profileService'

export const useProfile = (user) => {
  const navigate = useNavigate()
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

    // Modify condition with prop based on profile
    if (user && user.is_new) {
      navigate('/onboarding')
      setProfile(null)
    } 
    if (user) {
      getProfile()
    }

  }, [user, navigate])


  return profile
}

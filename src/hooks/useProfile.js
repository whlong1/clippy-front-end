import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import { useToken } from './useToken'
import * as profileService from '../services/profileService'

export const useProfile = (user) => {
  const navigate = useNavigate()
  const tokenStatus = useToken(user)
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

    // if (user) {
    //   getProfile()
    // }

    // Modify condition with prop based on profile?
    // for is_new to be set to false, need user to log out and login
    if (user && user.is_new) {
      navigate('/onboarding')
      setProfile(null)
    } else if (user) {
      getProfile()
    }

  }, [user, tokenStatus, navigate])


  return profile
}

// No issues when a non logged in user visits site
// token is now available when fetching profile


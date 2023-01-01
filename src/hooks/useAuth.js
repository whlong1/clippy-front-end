import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import * as tokenService from '../services/tokenService'
import * as profileService from '../services/profileService'

export const useAuth = () => {
  const {
    user,
    isLoading,
    isAuthenticated,
    getAccessTokenSilently,
  } = useAuth0()

  const [error, setError] = useState(null)
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const handleToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        tokenService.setToken(token)
        const res = await profileService.getProfile()
        console.log(res)
        setProfile(res)
      } catch (error) {
        setError(error)
      }
    }
    if (user) handleToken()
  }, [user, getAccessTokenSilently])

  return { user, profile, isLoading, isAuthenticated, error }
}
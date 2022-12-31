import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"

import * as tokenService from '../services/tokenService'

export const useHandleToken = (user) => {
  const { getAccessTokenSilently } = useAuth0()
  useEffect(() => {
    const handleToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        tokenService.setToken(token)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) handleToken()
    // Add condition to clear token if user is null!
  }, [user, getAccessTokenSilently])
}

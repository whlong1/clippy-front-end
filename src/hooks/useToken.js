import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import * as tokenService from '../services/tokenService'

export const useToken = (user) => {
  const { getAccessTokenSilently } = useAuth0()
  const [error, setError] = useState(null)

  useEffect(() => {
    const handleToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        console.log(token)
        tokenService.setToken(token)
      } catch (error) {
        console.log('Error', error)
        setError("Error while setting token!")
      }
    }
    if (user) handleToken()
  }, [user, getAccessTokenSilently])

  return error
}

import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Services
import * as authService from './services/authService'

// Hooks
import { useHandleToken } from './hooks/useHandleToken'

const App = () => {
  const {
    user,
    isLoading,
    isAuthenticated,
  } = useAuth0()

  const [profile, setProfile] = useState(null)
  
  useHandleToken(user)
  
  console.log('Profile', profile)
  console.log('Auth0 User', user)
  console.log('isAuthenticated', isAuthenticated)

  useEffect(() => {
    // This functionality can move into profile
    const fetchUserDataFromToken = async () => {
      try {
        const res = await authService.getUserDataFromToken()
        if (res.error) throw Error(res.error)
        setProfile(res)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchUserDataFromToken()
  }, [user])

  if (isLoading) return <h1>Authenticating...</h1>

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
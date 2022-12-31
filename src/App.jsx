// import { useState, useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Services
// import * as profileService from './services/profileService'

// Hooks
import { useToken } from './hooks/useToken'
import { useProfile } from './hooks/useProfile'

const App = () => {
  const {
    user,
    isLoading,
    isAuthenticated,
  } = useAuth0()

  // const [profile, setProfile] = useState(null)

  const profile = useProfile(user)
  useToken(user)

  console.log('Profile', profile)
  console.log('Auth0 User', user)
  console.log('isAuthenticated', isAuthenticated)

  // useEffect(() => {
  //   // This functionality can move into profile
  //   const getProfile = async () => {
  //     try {
  //       const res = await profileService.getProfile()
  //       if (res.error) throw Error(res.error)
  //       setProfile(res)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   if (user) getProfile()
  // }, [user])

  if (isLoading) return <h1>Authenticating...</h1>

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
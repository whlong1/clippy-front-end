import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'
import AppRouter from './components/Routes/AppRouter'

// Services
import * as authService from './services/authService'

const App = () => {
  const [profile, setProfile] = useState(null)
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0()

  console.log('Current User', user)
  console.log('Profile', profile)
  console.log('isAuthenticated', isAuthenticated)

  useEffect(() => {
    const fetchUserDataFromToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        console.log('Token', token)
        const res = await authService.getUserDataFromToken(token)
        if (res.error) throw Error(res.error)
        setProfile(res)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchUserDataFromToken()
  }, [user, getAccessTokenSilently])


  return (
    <>
      <NavBar user={user} />
      <AppRouter />
    </>
  )
}

export default App
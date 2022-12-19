import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import NavBar from './components/NavBar/NavBar'
import Router from './components/Router/Router'

// Services
import * as authService from './services/authService'
import * as profileService from './services/profileService'

const App = () => {
  const [profile, setProfile] = useState(null)
  const { user, getAccessTokenSilently, signup } = useAuth0()

  console.log('Current User', user)
  console.log('Profile', profile)

  useEffect(() => {
    const fetchUserDataFromToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        const res = await authService.getUserDataFromToken(token)
        if (res.error) throw Error(res.error)
        setProfile(res)
      } catch (error) {
        console.log(error)
      }
    }
    fetchUserDataFromToken()
  }, [getAccessTokenSilently])


  return (
    <>
      <NavBar user={user} />
      <Router />
    </>
  )
}

export default App
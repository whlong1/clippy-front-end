import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import NavBar from './components/NavBar/NavBar'
import * as authService from './services/authService'
import './App.css'

import LoginButton from './components/LoginButton/LoginButton'
import LogoutButton from './components/LogoutButton/LogoutButton'

const App = () => {
  const { user, getAccessTokenSilently } = useAuth0()

  // Does the domain, audience, and scope matter?
  // const domain = "dev-56chijhh78c0pcex.us.auth0.com"
  // const token = await getAccessTokenSilently({
  //   audience: `https://${domain}`, scope: "read:current_user"
  // })

  console.log('auth0 User Data:', user)

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      console.log('Token:', token)
      if (token) {
        const profileData = await authService.getUserMetadata(token)
        console.log('Profile Data', profileData)
      } else {
        console.log('Please sign up!')
      }
    }
    getToken()
  }, [user, getAccessTokenSilently])

  return (
    <>
      <NavBar />
      <LoginButton />
      <LogoutButton />
    </>
  )
}

export default App
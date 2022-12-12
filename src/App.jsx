import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import NavBar from './components/NavBar/NavBar'
import * as authService from './services/authService'
import './App.css'

import LoginButton from './components/LoginButton/LoginButton'
import LogoutButton from './components/LogoutButton/LogoutButton'

const App = () => {
  const [msg, setMsg] = useState('')
  const { user, getAccessTokenSilently } = useAuth0()

  // Does the domain, audience, and scope matter?
  // This information is included on the back end (middleware/auth.js), so 
  // presumably the client and api apps registered in auth0 share an audience.

  // Alternate getAccessTokenSilently
  // const domain = "dev-56chijhh78c0pcex.us.auth0.com"
  // const token = await getAccessTokenSilently({
  //   audience: `https://${domain}`, scope: "read:current_user"
  // })

  // Notes:
  // If token exists, our back end controller will retrieve a profile 
  // associated with the user sub property decoded from the jwt.

  // If a token does not exist, and the user is signing up,
  // we redirect them to a 'complete your profile page'
  // The back end controller needs to create a new profile instance,
  // associated with that sub property, and return it to the client.

  console.log('auth0 User Data:', user)

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently()
      console.log('Token:', token)
      if (token) {
        const profileData = await authService.getUserMetadata(token)
        console.log('Profile Data', profileData)
        setMsg('Welcome back to Clippy!')
      } else {
        setMsg('New to Clippy? Click here to create an account.')
      }
    }
    getToken()
  }, [user, getAccessTokenSilently])

  return (
    <>
      <NavBar />
      <p>
        {msg}
      </p>
      <LoginButton />
      <LogoutButton />
    </>
  )
}

export default App
import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'


// import { signup } from '@auth0/auth0-react'

// Components
import NavBar from './components/NavBar/NavBar'
import Router from './components/Router/Router'

// Services
import * as authService from './services/authService'
import * as profileService from './services/profileService'

const App = () => {
  // const [errorMsg, setErrorMsg] = useState('')
  const [profile, setProfile] = useState(null)
  // const [isLoading, setisLoading] = useState(false)
  const { user, getAccessTokenSilently, signup } = useAuth0()

  console.log('Current User', user)

  useEffect(() => {
    const fetchUserDataFromToken = async () => {
      try {
        // setisLoading(true)
        const profileData = await profileService.getProfiles()
        // const token = await getAccessTokenSilently()
        // const res = await authService.getUserDataFromToken(token)
        console.log(profileData)
        // if (res.error) throw Error(res.error)
        // setProfile(res)
        // setisLoading(false)
      } catch (error) {
        // setErrorMsg(error.message)
        // setisLoading(false)
      }
    }
    fetchUserDataFromToken()
  }, [getAccessTokenSilently])

  console.log('Profile', profile)

  // if (isLoading) return <h1>Loading</h1>
  // if (errorMsg) return <h1>{errorMsg}</h1>

  return (
    <>
      <NavBar user={user} />
      <Router />
    </>
  )
}

export default App
import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Services
import * as authService from './services/authService'

const App = () => {
  const [profile, setProfile] = useState(null)
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0()

  // current user now has sei/roles property for admins:
  console.log('Current User', user) 
  
  // console.log('Profile', profile)
  // console.log('isAuthenticated', isAuthenticated)

  useEffect(() => {
    const fetchUserDataFromToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        console.log('Token', token)
        const res = await authService.getUserDataFromToken(token)
        if (res.error) throw Error(res.error)
        console.log('res',res)
        setProfile(res)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchUserDataFromToken()
  }, [user, getAccessTokenSilently])


  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
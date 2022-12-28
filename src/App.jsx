import { useEffect, useState } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Services
import * as authService from './services/authService'

import { useSelector, useDispatch } from 'react-redux'
import { authenticate, setToken } from './features/Auth/authSlice'

const App = () => {
  const [profile, setProfile] = useState(null)
  const { user, getAccessTokenSilently, isAuthenticated } = useAuth0()


  const loggedIn = useSelector((state) => state.auth.isAuthenticated)


  console.log(loggedIn)
  const dispatch = useDispatch()

  // current user now has sei/roles property for admins:
  // console.log('Current User', user) 




  // dispatch(setToken(getAccessTokenSilently()))
  // console.log('Profile', profile)
  // console.log('isAuthenticated', isAuthenticated)

  useEffect(() => {
    const fetchUserDataFromToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        // console.log('Token', token)
        // const res = await authService.getUserDataFromToken(token)
        // if (res.error) throw Error(res.error)
        // console.log('res',res)

        dispatch(authenticate(token))


        // setProfile(res)
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchUserDataFromToken()
  }, [user, getAccessTokenSilently])


  if (!loggedIn) return <h1>Loading</h1>

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
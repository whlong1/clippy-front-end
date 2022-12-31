import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Services
import * as authService from './services/authService'

import { useDispatch } from 'react-redux'
import { authenticate } from './features/Auth/authSlice'

const App = () => {
  const dispatch = useDispatch()
  const { user, isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0()

  console.log('Current User', user)
  console.log('isAuthenticated', isAuthenticated)

  useEffect(() => {
    const fetchUserDataFromToken = async () => {
      try {
        const token = await getAccessTokenSilently()
        const res = await authService.getUserDataFromToken(token)
        if (res.error) throw Error(res.error)
        res.isAdmin = user['sei/roles'].includes('Admin')
        dispatch(authenticate({ token: token, profile: res }))
      } catch (error) {
        console.log(error)
      }
    }
    if (user) fetchUserDataFromToken()
  }, [dispatch, user, isLoading, getAccessTokenSilently])

  if (isLoading) return <h1>Loading</h1>

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
import { useEffect } from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import { useNavigate } from 'react-router-dom'
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Hooks
import { useProfile } from './hooks/useProfile'

const App = () => {
  const {
    user,
    isLoading,
    isAuthenticated,
  } = useAuth0()

  const navigate = useNavigate()
  const profile = useProfile(user)

  useEffect(() => {
    const isNewUser = user?.is_new && !profile?.isOnboarded
    if (isNewUser) navigate('/onboarding')
  }, [user, profile, navigate])

  console.log('Auth0 User', user)
  console.log('Profile', profile)
  console.log('isAuthenticated', isAuthenticated)

  // isLoading only refers to auth0 user retrieval
  if (isLoading) return <h1>Authenticating...</h1>

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
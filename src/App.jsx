import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Hooks
import { useAuth } from './hooks/useAuth'

const App = () => {
  const {
    user,
    error,
    profile,
    isLoading,
    isAuthenticated,
  } = useAuth()

  const navigate = useNavigate()

  useEffect(() => {
    const isNewUser = user?.is_new && !profile?.isOnboarded
    if (isNewUser) navigate('/onboarding')
  }, [user, profile, navigate])

  console.log('Auth0 User', user)
  console.log('Profile', profile)
  console.log('isAuthenticated', isAuthenticated)

  // isLoading only refers to auth0 user retrieval
  if (isLoading) return <h1>Authenticating...</h1>
  if (error) return <h1>Oopsy Daisy! {error}</h1>

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
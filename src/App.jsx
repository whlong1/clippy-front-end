import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

import Loading from './pages/Loading/Loading'
import ErrorMsg from './pages/ErrorMsg/ErrorMsg'

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

  if (error) return <ErrorMsg error={error} />
  if (isLoading) return <Loading msg={'Authenticating...'} />

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
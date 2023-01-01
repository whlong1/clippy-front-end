import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

import Landing from './pages/Landing/Landing'
import Loading from './pages/Loading/Loading'
import ErrorMsg from './pages/ErrorMsg/ErrorMsg'
import Onboarding from './pages/Onboarding/Onboarding'

// Hooks
import { useAuth } from './hooks/useAuth'

const App = () => {
  const {
    user,
    error,
    profile,
    isLoading,
    setProfile,
    isAuthenticated,
  } = useAuth()

  console.log('Auth0 User', user)
  console.log('Profile', profile)
  console.log('isAuthenticated', isAuthenticated)

  if (!user && !isLoading) return <Landing />
  if (error) return <ErrorMsg error={error} />
  if (isLoading) return <Loading msg={'Authenticating...'} />
  if (user?.is_new && !profile?.isOnboarded) {
    return <Onboarding profile={profile} setProfile={setProfile} />
  }

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
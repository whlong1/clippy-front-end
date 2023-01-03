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

//* Reserve this component for auth related functionality
const App = () => {
  const {
    user,
    error,
    profile,
    isLoading,
    setProfile,
    isAuthenticated,
  } = useAuth()

  const authProps = {
    user, profile, setProfile, isAuthenticated,
  }
  
  if (!user && !isLoading) return <Landing />
  // Need bespoke components for these 2:
  if (error) return <ErrorMsg error={error} />
  if (isLoading || !profile) return <Loading msg={'Authenticating...'} />

  if (user?.is_new && !profile?.isOnboarded) {
    return <Onboarding profile={profile} setProfile={setProfile} />
  }

  return (
    <AppLayout {...authProps}>
      <AppRouter {...authProps} />
    </AppLayout>
  )
}

export default App
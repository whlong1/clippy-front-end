// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'
import AppLanding from './pages/AppLanding/AppLanding'
import StatusPage from './pages/StatusPage/StatusPage'
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

  if (!user && !isLoading) return <AppLanding />
  if (error) return <StatusPage error={error} />
  if (isLoading || !profile) return <StatusPage status={'Authenticating...'} />
  // Old approach uses user.is_new - problem if users logout/login before onboarding
  if (profile.isInitialUser || !profile?.isOnboarded) {
    return <Onboarding user={user} profile={profile} setProfile={setProfile} />
  }

  return (
    <AppLayout {...authProps}>
      <AppRouter {...authProps} />
    </AppLayout>
  )
}

export default App
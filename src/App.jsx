import './App.css'

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

  // if user isAdmin & first user - render admin onboarding page
  // finish profile, create and join cohort
  // admins need ability to join other cohorts from myProfile
  // test what happens if an admin joins without selecting a cohort

  if (!user && !isLoading) return <AppLanding />
  if (error) return <StatusPage error={error} />
  if (isLoading || !profile) return <StatusPage status={'Authenticating...'} />

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
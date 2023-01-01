import { useAuth0 } from "@auth0/auth0-react"
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

  const profile = useProfile(user)
  
  console.log('Auth0 User', user)
  console.log('Profile', profile)
  console.log('isAuthenticated', isAuthenticated)
  
  // isLoading only refers to auth0 user retrieval
  if (isLoading) return <h1>Authenticating...</h1>
  // useToken returns null when the token is set successfully
  // if (tokenError) return <h1>Oopsy Daisy! Error: {tokenError}</h1>

  
  
  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App


// If user is null handle redirect to a landing (outside of main app layout/router) here.
// If profile is missing fields should we redirect to onboarding?
// Onboarding should be outside of app router

// Onboarding can give user access to signup button
// if profile is null, return onboarding

// token is malformed after signup
// maybe reordering useToken and useProfile will fix it


// could have route for onboarding here, outside of layout and app router
// ...
// need to think about onboarding flow (how will this impact joining a cohort)
// you need to refresh the browser after being admitted to a cohort
// need to disable links until user has been admited to cohort

// isOnboarded prop on profile
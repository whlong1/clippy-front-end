import { useAuth0 } from "@auth0/auth0-react"
import './App.css'

// Components
import AppLayout from './layouts/AppLayout'
import AppRouter from './routes/AppRouter'

// Hooks
import { useToken } from './hooks/useToken'
import { useProfile } from './hooks/useProfile'

const App = () => {
  const {
    user,
    isLoading,
    isAuthenticated,
  } = useAuth0()

  const profile = useProfile(user)
  const tokenError = useToken(user)

  console.log('Profile', profile)
  console.log('Auth0 User', user)
  console.log('isAuthenticated', isAuthenticated)

  if (isLoading) return <h1>Authenticating...</h1>
  if (tokenError) return <h1>Oopsy Daisy! Error: {tokenError}</h1>

  return (
    <AppLayout>
      <AppRouter />
    </AppLayout>
  )
}

export default App
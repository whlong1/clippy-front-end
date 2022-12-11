import { Routes, Route } from 'react-router-dom'

import Signup from './pages/Signup/Signup'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/signup"
        element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/login"
        element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
      />
      <Route
        path="/profiles"
        element={
          <ProtectedRoute user={user}>
            <Profiles />
          </ProtectedRoute>
        }
      />
      <Route
        path="/change-password"
        element={
          <ProtectedRoute user={user}>
            <ChangePassword handleSignupOrLogin={handleSignupOrLogin} />
          </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default Router
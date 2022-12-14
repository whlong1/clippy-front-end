import { Routes, Route } from 'react-router-dom'

import Signup from '../../pages/Signup/Signup'
import Landing from '../../pages/Landing/Landing'
import Profiles from '../../pages/Profiles/Profiles'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/signup"
        element={<Signup/>}
      />
      <Route
        path="/profiles"
        element={
          // <ProtectedRoute>
          <Profiles />
          // </ProtectedRoute>
        }
      />

      <Route
        path="/admin"
        element={
          // <ProtectedRoute>
          <AdminPanel/>
          // </ProtectedRoute>
        }
      />
    </Routes>
  )
}

export default Router
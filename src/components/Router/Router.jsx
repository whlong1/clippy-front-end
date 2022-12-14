import { Routes, Route } from 'react-router-dom'

import Landing from '../../pages/Landing/Landing'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route
        path="/admin"
        element={<AdminPanel />}
      />
    </Routes>
  )
}

export default Router
import { Routes, Route } from 'react-router-dom'

import Landing from '../../pages/Landing/Landing'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'

// import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/callback" element={<h1>Welcome back</h1>} />
      <Route path='/onboarding' element={<h1>Onboarding</h1>}/>
      <Route
        path="/admin"
        element={<AdminPanel />}
      />
    </Routes>
  )
}

export default Router
import { Routes, Route } from 'react-router-dom'

import Landing from '../../pages/Landing/Landing'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'
import Onboarding from '../../pages/Onboarding/Onboarding'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Landing />
      } />
      <Route path="/callback" element={
        <h1>Welcome back</h1>
      } />
      <Route path='/onboarding' element={
        <Onboarding />
      } />
      <Route path="/admin" element={
        <AdminPanel />
      } />
    </Routes>
  )
}

export default Router
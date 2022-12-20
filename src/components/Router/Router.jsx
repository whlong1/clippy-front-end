import { Routes, Route } from 'react-router-dom'

import Menu from '../Menu/Menu'
import Landing from '../../pages/Landing/Landing'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'
import Onboarding from '../../pages/Onboarding/Onboarding'
import Layout from '../../pages/Layout/Layout'
import People from '../../pages/People/People'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={
        <Landing />
      } />
      <Route path="/admin" element={
        <AdminPanel />
      } />
      <Route path="/*" element={
        <h1>Error Page</h1>
      } />


      <Route element={<Layout />}>
        <Route path='onboarding' element={<Onboarding />} />
        <Route path='people' element={<People />} />
      </Route>

    </Routes>
  )
}

export default Router
import { Routes, Route } from 'react-router-dom'

import Menu from '../Menu/Menu'
import Landing from '../../pages/Landing/Landing'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'
import Onboarding from '../../pages/Onboarding/Onboarding'
import Layout from '../../pages/Layout/Layout'
import People from '../../pages/People/People'

const AppRouter = () => {
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
        <Route path='people'>
          <Route index element={<h1>People Landing</h1>} />
          <Route path=':id' element={<h1>Person</h1>} />
        </Route>
      </Route>

    </Routes>
  )
}

export default AppRouter
import { Routes, Route } from 'react-router-dom'

import Menu from '../Menu/Menu'
import Landing from '../../pages/Landing/Landing'
import AdminPanel from '../../pages/AdminPanel/AdminPanel'
import Onboarding from '../../pages/Onboarding/Onboarding'
import Layout from '../../pages/Layout/Layout'
import People from '../../pages/People/People'

const PeopleRouter = () => {
  return (
    <Route element={<Layout />}>
      <Route path='people'>
        <Route index element={<h1>People Landing</h1>} />
        <Route path=':id' element={<h1>Person</h1>} />
      </Route>
    </Route>
  )
}

export default PeopleRouter
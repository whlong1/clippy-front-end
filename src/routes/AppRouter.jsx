import { Routes, Route } from 'react-router-dom'

import Landing from '../pages/Landing/Landing'
import AdminPanel from '../pages/AdminPanel/AdminPanel'
import PeopleRouter from './PeopleRouter'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/*" element={<h1>Error Page</h1>} />
      <Route path='/people/*' element={<PeopleRouter />} />
    </Routes>
  )
}

export default AppRouter
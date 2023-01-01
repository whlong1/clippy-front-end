import { Routes, Route } from 'react-router-dom'

import Landing from '../pages/Landing/Landing'
import AdminPanel from '../pages/AdminPanel/AdminPanel'

import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/onboarding" element={<h1>Onboarding</h1>} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/*" element={<h1>Error Page</h1>} />
      <Route path='/people/*' element={<PeopleRouter />} />
      <Route path='/attendance/*' element={<AttendanceRouter />} />
      <Route path='/deliverables/*' element={<DeliverablesRouter />} />
    </Routes>
  )
}

export default AppRouter
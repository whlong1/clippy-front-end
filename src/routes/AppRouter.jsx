import { Routes, Route } from 'react-router-dom'

import AdminPanel from '../pages/AdminPanel/AdminPanel'

import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'

// Hooks
// import { useCohorts } from '../hooks/useCohorts'

const AppRouter = () => {
  // const { data, status } = useCohorts()
  // console.log(data, status)

  return (
    <Routes>
      <Route path="/" element={<h1>Welcome back</h1>} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/*" element={<h1>Error Page</h1>} />

      <Route path='/people/*' element={<PeopleRouter />} />
      <Route path='/attendance/*' element={<AttendanceRouter />} />
      <Route path='/deliverables/*' element={<DeliverablesRouter />} />

    </Routes>
  )
}

export default AppRouter
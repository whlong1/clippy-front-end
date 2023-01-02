import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'
import AdminPanel from '../pages/AdminPanel/AdminPanel'

// Hooks
import { useCohorts } from '../hooks/useCohorts'

const AppRouter = (props) => {
  const { cohorts, status } = useCohorts()
  const [currentCohort, setCurrentCohort] = useState()
  console.log(cohorts, status)

  const appProps = {
    cohorts,
    ...props,
    currentCohort,
    setCurrentCohort,
  }

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <Routes>
      <Route path="/" element={<h1>Welcome back</h1>} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/*" element={<h1>Error Page</h1>} />

      <Route path='/people/*' element={<PeopleRouter {...appProps} />} />
      <Route path='/attendance/*' element={<AttendanceRouter  {...appProps} />} />
      <Route path='/deliverables/*' element={<DeliverablesRouter  {...appProps} />} />

    </Routes>
  )
}

export default AppRouter
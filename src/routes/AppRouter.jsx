import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'
import AdminPanel from '../pages/AdminPanel/AdminPanel'

// Hooks
import { useCohorts } from '../hooks/useCohorts'

const AppRouter = (props) => {
  const { user, profile } = props
  const { cohorts, status } = useCohorts()
  const [cohortId, setCohortId] = useState(profile.cohort)

  const appProps = {
    cohorts,
    cohortId,
    ...props,
    setCohortId,
  }

  console.log('Auth0 User', user.name)
  console.log('Current Cohort', cohortId)
  console.log('Profile', profile.firstName)

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

// TODO
// • Add protected route for AdminPanel with user.isAdmin
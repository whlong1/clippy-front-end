import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminRouter from './AdminRouter'
import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'

const AppRouter = (props) => {
  const { user, profile } = props
  const [cohortId, setCohortId] = useState(profile.cohort)

  const appProps = {
    user,
    cohortId,
    ...props,
    setCohortId,
  }

  console.log('Current Cohort:', cohortId)
  console.log('Auth:', user.name, profile.email)

  return (
    <Routes>
      <Route path="/" element={<h1>Welcome back</h1>} />
      <Route path="/*" element={<h1>Error Handler</h1>} />
      <Route path='/profile' element={<h1>My Profile</h1>} />

      <Route path='/admin/*' element={<AdminRouter {...appProps} />} />
      <Route path='/people/*' element={<PeopleRouter {...appProps} />} />
      <Route path='/attendance/*' element={<AttendanceRouter  {...appProps} />} />
      <Route path='/deliverables/*' element={<DeliverablesRouter  {...appProps} />} />

    </Routes>
  )
}

export default AppRouter
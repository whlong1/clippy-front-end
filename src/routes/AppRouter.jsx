import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

// Routers
import AdminRouter from './AdminRouter'
import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'

// Pages
import MyProfile from '../pages/MyProfile/MyProfile'
import PageNotFound from '../pages/PageNotFound/PageNotFound'
import CohortLanding from '../pages/CohortLanding/CohortLanding'

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
      <Route path="/*" element={<PageNotFound />} />
      <Route path="/" element={<CohortLanding {...appProps} />} />
      <Route path='/profile' element={<MyProfile {...appProps} />} />

      <Route path='/admin/*' element={<AdminRouter {...appProps} />} />
      <Route path='/people/*' element={<PeopleRouter {...appProps} />} />
      <Route path='/attendance/*' element={<AttendanceRouter  {...appProps} />} />
      <Route path='/deliverables/*' element={<DeliverablesRouter  {...appProps} />} />

    </Routes>
  )
}

export default AppRouter
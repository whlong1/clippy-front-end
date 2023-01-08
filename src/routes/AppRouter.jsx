import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import AdminRouter from './AdminRouter'
import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'
// import AdminPanel from '../pages/AdminPanel/AdminPanel'

const AppRouter = (props) => {
  const { user, profile } = props
  const [cohortId, setCohortId] = useState(profile.cohort)

  const appProps = {
    user,
    cohortId,
    ...props,
    setCohortId,
  }

  console.log('Auth0 User', user.name)
  // console.log('Current Cohort', cohortId)
  // console.log('Profile', profile.firstName)

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

// TODO
// • Add protectedRoutes?
// • Audit props being passed
// • Add Edit profile functionality
// • Research cancelling queries, refetching, etc
// • Build out AdminRouter components and functionality
// • Create a reusable feature landing wrapper component
// • Audit keys (need consistent key pattern for all resources)
// • Figure out if background refetching is functioning correctly
// • Review access to admin functionality (front end and backend)
// • Add toggle down functionality to each Role section on PeopleMenu
// • DeliverableStatusSelect and StudentStatusSelect can be renamed BlankStatus and display the value as well.
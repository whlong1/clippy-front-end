import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import PeopleRouter from './PeopleRouter'
import AttendanceRouter from './AttendanceRouter'
import DeliverablesRouter from './DeliverablesRouter'
import AdminPanel from '../pages/AdminPanel/AdminPanel'

const AppRouter = (props) => {
  const { user, profile } = props
  const [cohortId, setCohortId] = useState(profile.cohort)

  const appProps = {
    user,
    cohortId,
    ...props,
    setCohortId,
  }
  

  // console.log('Auth0 User', user.name)
  console.log('Current Cohort', cohortId)
  // console.log('Profile', profile.firstName)

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

// TODO GENERAL
// • Logo
// • Mockups
// • Audit props being passed
// • Check off user stories in README
// • Create Admin feature and corresponding components?
// • Audit keys (need consistent key pattern for all resources)
// • Figure out if background refetching is functioning correctly
// • Review access to admin functionality (front end and backend)
// • Research addition methods for cancelling queries, refetching, etc
// • DeliverableStatusSelect and StudentStatusSelect can be renamed BlankStatus and display the value as well.
// • If I'm looking at a particular deliverable and switch the cohort id, it should navigate me away. However,
//   hitting the back button will take me back to that deliverable view. Need additional redirect. Can we create
//   some kind of reusable route wrapper component for this? Might need to add cohortId to paths. We can catch
//   this value in select cohort and update the selected cohort if there is an issue.

// TODO APP
// • Create a reusable feature landing wrapper component
// • Add protected route for AdminPanel with user.isAdmin (AppRouter)
// • When a user selects a new cohort from the select menu, redirect user to given base path (people, attendance, deliverables)

// TODO PEOPLE
// • Add changeRole functionality
// • Add Edit profile functionality
// • Add toggle down functionality to each Role section
// • Figure out how to handle Role/Title in PersonDetails after changing role
// • Clarify difference between user.profile and profile being viewed in people

// TODO ATTENDANCE
// • update attendance
// • isAdmin check for create button link

// TODO DELIVERABLES
// • isAdmin check for create button link
// • submitting might need to update useManageDeliverableDetails
// • Verify student functionality
// • DeliverableInfo component could be shared MyDeliverableDetails and DeliverableDetails

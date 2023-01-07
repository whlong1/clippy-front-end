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
  // console.log('Current Cohort', cohortId)
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
// • Audit props being passed
// • On delete, navigate to base path
// • Check off user stories in README
// • Create Admin feature and corresponding components?
// • Routing components are for routing, take state elswhere
// • Audit keys (need consistent key pattern for all resources)
// • Details pages need to redirect if the selected cohort changes!
// • Make sure student deliverable status auto fills as missing for withdrawals
// • We don't need a name property on profile (remove from schema and onboarding form)
// • Make use of the action.type property in management hooks to target appropriate setter fn.
// • DeliverableStatusSelect and StudentStatusSelect can be renamed BlankStatus and display the value as well.

// TODO APP
// • Create a reusable feature landing wrapper component
// • Add protected route for AdminPanel with user.isAdmin (AppRouter)
// • When a user selects a new cohort from the select menu, redirect user to given base path (people, attendance, deliverables)

// TODO PEOPLE
// • Add changeRole functionality
// • Add Edit profile functionality
// • Add toggle functionality to each Role section
// • Create admin UI component and add to PersonDetails
// • Create a ProfilePiture component (can accept size prop: small/large)
// • Figure out how to handle Role/Title in PersonDetails after changing role
// • Clarify difference between user.profile and profile being viewed in people

// TODO ATTENDANCE
// • Delete attendance
// • refactor manager
// • update attendance
// • isAdmin check for create button link

// TODO DELIVERABLES
// • isAdmin check for create button link
// • experiment with how moving around useFeature hooks impacts loading
// • grading and submitting might need to update useManageDeliverableDetails
// • From deliverable details, render list of students/studentDeliverables
//   clicking on that should navigate instructors to GradeStudentDeliverable
//   router.get('/:sdId/view', deliverablesCtrl.showStudentDeliverable)
// • the list of deliverables a student sees will be different than an instructor
//   pattern used should apply to attendance as well. conditionally render menu?
// • If students see a different side menu, easier to control user journey (more reason to hold list state in menus)
// • DeliverableInfo component could be shared MyDeliverableDetails and DeliverableDetails

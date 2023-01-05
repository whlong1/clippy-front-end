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
// • We don't need a name property on profile (remove from schema and onboarding form)
// • Create Admin feature and corresponding components?
// • feature state doesn't need to be in router. would moving it to respective Menu components
//   make rerenders more efficient?
// • Make use of the action.type property in management hooks to target appropriate setter fn.
// • Audit props being passed
// • Routing components are for routing, take state elswhere
// • Details pages need to redirect if the selected cohort changes!

// TODO APP
// • Create a reusable feature landing wrapper component
// • Add protected route for AdminPanel with user.isAdmin (AppRouter)
// • When a user selects a new cohort from the select menu, redirect user to given base path (people, attendance, deliverables)

// TODO PEOPLE
// • Add Edit profile functionality
// • Add toggle functionality to each Role section
// • Create admin UI component and add to PersonDetails
// • Create a ProfilePiture component (can accept size prop: small/large)
// • Figure out how to handle Role/Title in PersonDetails after changing role
// • Clarify difference between user.profile and profile being viewed in people

// TODO ATTENDANCE
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
// • Build out useManageStudentDeliverable hook
// • If students see a different side menu, easier to control user journey (more reason to hold list state in menus)
// • DeliverableInfo component could be shared MyDeliverableDetails and DeliverableDetails

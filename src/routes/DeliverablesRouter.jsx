import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import NewDeliverable from '../features/Deliverables/NewDeliverable'
import ShowDeliverable from '../features/Deliverables/ShowDeliverable.jsx'
import DeliverablesMenu from '../features/Deliverables/DeliverablesMenu.jsx'
import StudentDeliverablesMenu from '../features/Deliverables/StudentDeliverablesMenu.jsx'
import GradeStudentDeliverable from '../features/Deliverables/GradeStudentDeliverable.jsx'
import StudentDeliverableView from '../features/Deliverables/StudentDeliverableView.jsx'

const DeliverablesRouter = (props) => {
  const { user, cohortId, profile } = props
  console.log(user.email, profile.firstName)

  // Details alternative: Page Show View?

  // Student Routes:
  if (!user.isAdmin) return (
    <Routes>
      <Route element={<ContentLayout menu={<StudentDeliverablesMenu {...props} />} />}>
        <Route index element={<h1>My Deliverables Landing</h1>} />
        <Route path=':studentDeliverableId' element={<StudentDeliverableView user={user} cohortId={cohortId} />} />
      </Route>
    </Routes>
  )

  // Admin Routes:
  return (
    <Routes>
      <Route element={<ContentLayout menu={<DeliverablesMenu {...props} />} />}>
        <Route index element={<h1>Deliverables Landing</h1>} />
        <Route path='new' element={<NewDeliverable cohortId={cohortId} />} />
        <Route path=':deliverableId' element={<ShowDeliverable user={user} cohortId={cohortId} />} />

        <Route
          path=':deliverableId/students/:studentDeliverableId/grade'
          element={<GradeStudentDeliverable user={user} cohortId={cohortId} />}
        />
      </Route>
    </Routes>
  )
}

export default DeliverablesRouter
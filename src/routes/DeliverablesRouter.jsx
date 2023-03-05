import { Routes, Route, Navigate } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import NewDeliverable from '../features/Deliverables/NewDeliverable'
import ShowDeliverable from '../features/Deliverables/ShowDeliverable.jsx'
import DeliverablesMenu from '../features/Deliverables/DeliverablesMenu.jsx'
import FeatureLanding from '../components/FeatureLanding/FeatureLanding.jsx'
import ShowStudentDeliverable from '../features/Deliverables/ShowStudentDeliverable.jsx'
import StudentDeliverablesMenu from '../features/Deliverables/StudentDeliverablesMenu.jsx'
import GradeStudentDeliverable from '../features/Deliverables/GradeStudentDeliverable.jsx'

const DeliverablesRouter = (props) => {
  const { user, profile, cohortId } = props

  // Student Routes:
  if (!user.isAdmin) return (
    <Routes>
      <Route element={<ContentLayout menu={<StudentDeliverablesMenu {...props} />} />}>
        <Route index element={<FeatureLanding title="My Deliverables" />} />
        <Route path="/*" element={<Navigate to='/deliverables' />} />
        <Route
          path=':studentDeliverableId'
          element={<ShowStudentDeliverable user={user} cohortId={cohortId} />}
        />
      </Route>
    </Routes>
  )

  // Admin Routes:
  return (
    <Routes>
      <Route element={<ContentLayout menu={<DeliverablesMenu {...props} />} />}>
        <Route index element={<FeatureLanding title="Deliverables" />} />
        <Route path='new' element={<NewDeliverable cohortId={cohortId} />} />
        <Route
          path=':deliverableId'
          element={<ShowDeliverable user={user} profile={profile} cohortId={cohortId} />}
        />
        <Route
          path=':deliverableId/students/:studentDeliverableId/grade'
          element={<GradeStudentDeliverable user={user} profile={profile} cohortId={cohortId} />}
        />
      </Route>
    </Routes>
  )
}

export default DeliverablesRouter
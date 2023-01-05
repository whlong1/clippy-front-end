import { Routes, Route } from 'react-router-dom'

// Components
import ContentLayout from '../layouts/ContentLayout.jsx'
import NewDeliverable from '../features/Deliverables/NewDeliverable'
import DeliverablesMenu from '../features/Deliverables/DeliverablesMenu.jsx'
import DeliverableDetails from '../features/Deliverables/DeliverableDetails.jsx'
import GradeStudentDeliverable from '../features/Deliverables/GradeStudentDeliverable.jsx'

// Hooks
import { useDeliverables } from '../hooks/useDeliverables.js'

const DeliverablesRouter = (props) => {
  const { user, cohortId } = props
  const { deliverables, status } = useDeliverables(cohortId)

  const menuProps = {
    ...props,
    deliverables,
  }

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  // Student Routes:
  if (!user.isAdin) return (
    <Routes>
      <Route element={<ContentLayout menu={<DeliverablesMenu {...menuProps} />} />}>
        <Route index element={<h1>Deliverables Landing</h1>} />
      </Route>
    </Routes>
  )

  return (
    <Routes>
      <Route element={<ContentLayout menu={<DeliverablesMenu {...menuProps} />} />}>
        <Route index element={<h1>Deliverables Landing</h1>} />
        <Route path='new' element={<NewDeliverable cohortId={cohortId} />} />
        <Route path=':deliverableId' element={<DeliverableDetails user={user} cohortId={cohortId} />} />

        <Route
          path=':deliverableId/students/:studentDeliverableId/grade'
          element={<GradeStudentDeliverable user={user} cohortId={cohortId} />}
        />
        {/* <Route path=':deliverableId/students/:sdId' element={<StudentDeliverable user={user} cohortId={cohortId} />} /> */}
      </Route>
    </Routes>
  )
}

export default DeliverablesRouter
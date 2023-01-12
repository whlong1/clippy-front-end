import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
import CompletionTracker from './CompletionTracker'
import MenuStatus from '../../components/MenuStatus/MenuStatus'
import { useIndexStudentDeliverables } from '../../hooks/useIndexStudentDeliverables'

const StudentDeliverablesMenu = (props) => {
  // Student DeliverablesMenu View
  const { cohortId, profile } = props
  const { studentDeliverables, status } = useIndexStudentDeliverables(cohortId, profile._id)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  return (
    <MenuLayout {...props}>
      <h1>My Deliverables Menu</h1>

      <CompletionTracker studentDeliverables={studentDeliverables} />

      <h2>My Deliverables</h2>

      {studentDeliverables.map((sd) => (
        <Link key={sd._id} to={`/deliverables/${sd._id}`}>
          {sd.name}
          ------
          {sd.status}
        </Link>
      ))}

    </MenuLayout>
  )
}

export default StudentDeliverablesMenu
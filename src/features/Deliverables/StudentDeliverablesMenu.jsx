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
      <span>
        <h1>My Deliverables</h1>
      </span>

      <CompletionTracker studentDeliverables={studentDeliverables} />

      {studentDeliverables.map((sd) => (
        <Link key={sd._id} to={`/deliverables/${sd._id}`}>
          <p>{sd.name}</p>
          <p>{sd.status[0].toUpperCase() + sd.status.slice(1)}</p>
        </Link>
      ))}

    </MenuLayout>
  )
}

export default StudentDeliverablesMenu
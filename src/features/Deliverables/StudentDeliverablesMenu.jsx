import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
import CompletionTracker from './CompletionTracker'
import { useIndexStudentDeliverables } from '../../hooks/useIndexStudentDeliverables'

const StudentDeliverablesMenu = (props) => {
  // Student DeliverablesMenu View
  const { cohortId, profile } = props
  const { studentDeliverables, status } = useIndexStudentDeliverables(cohortId, profile._id)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>


  return (
    <MenuLayout {...props}>
      <h1>My Deliverables Menu</h1>

      <CompletionTracker studentDeliverables={studentDeliverables} />

      <h3>My Deliverables</h3>

      {studentDeliverables.map((sd) => (
        <Link key={sd._id} to={`/deliverables/${sd._id}`}>
          {sd.name}
          {sd.status}
        </Link>
      ))}

    </MenuLayout>
  )
}

export default StudentDeliverablesMenu
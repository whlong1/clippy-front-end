import { Link } from 'react-router-dom'

// Components
import MenuLayout from '../../layouts/MenuLayout'
import { useIndexStudentDeliverables } from '../../hooks/useIndexStudentDeliverables'

const StudentDeliverablesMenu = (props) => {
  // Student DeliverablesMenu View
  const { cohortId, profile } = props
  const { studentDeliverables, status } = useIndexStudentDeliverables(cohortId, profile._id)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  console.log('Deliverables assigned to client student', studentDeliverables)

  return (
    <MenuLayout {...props}>
      <p>My Deliverables Menu</p>
      <p>Percent Complete</p>
      <p>Upcoming Deliverables</p>
      <p>New Feedback</p>

      {studentDeliverables.map((sd) => (
        <Link key={sd._id} to={`/deliverables/${sd._id}`}>
          {sd.name}
        </Link>
      ))}

    </MenuLayout>
  )
}

export default StudentDeliverablesMenu
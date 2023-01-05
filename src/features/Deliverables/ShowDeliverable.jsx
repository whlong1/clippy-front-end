import { useParams } from 'react-router-dom'

// Hooks
import { useShowDeliverable } from '../../hooks/useShowDeliverable'

// Components
import StudentDeliverableRow from './StudentDeliverableRow'
import RequirementsList from './RequirementsList'

const ShowDeliverable = (props) => {
  // const { user, cohortId } = props
  const { deliverableId } = useParams()
  const { deliverable, status } = useShowDeliverable(deliverableId)
  console.log('Deliverable Details:', deliverable)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <h1>
        {deliverable.name}
      </h1>

      {deliverable.dueDate}
      {deliverable.dueDate}

      <h2>Requirements</h2>
      <RequirementsList deliverable={deliverable} />


      {deliverable.students.map((student) => (
        <StudentDeliverableRow
          key={student._id}
          student={student}
          deliverableId={deliverableId}
        />
      ))}

    </section>
  )
}

export default ShowDeliverable
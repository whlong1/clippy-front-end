import { useParams, useNavigate } from 'react-router-dom'

// Hooks
import { useShowDeliverable } from '../../hooks/useShowDeliverable'
import { useDeliverablesManager } from '../../hooks/useDeliverablesManager'

// Components
import StudentDeliverableRow from './StudentDeliverableRow'
import RequirementsList from './RequirementsList'

const ShowDeliverable = (props) => {
  const { cohortId } = props
  const navigate = useNavigate()
  const { deliverableId } = useParams()
  const mutation = useDeliverablesManager(cohortId)
  const { deliverable, status } = useShowDeliverable(deliverableId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const handleDelete = () => {
    mutation.mutate({ type: 'remove', payload: { deliverableId: deliverableId } })
    navigate('/deliverables')
  }

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

      <button onClick={handleDelete}>Delete</button>

    </section>
  )
}

export default ShowDeliverable
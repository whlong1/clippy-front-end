import { useParams, useNavigate, Navigate } from 'react-router-dom'

// Hooks
import { useShowDeliverable } from '../../hooks/useShowDeliverable'
import { useDeliverablesManager } from '../../hooks/useDeliverablesManager'

// Components
import RequirementsList from './RequirementsList'
import StudentDeliverableRow from './StudentDeliverableRow'
import ContentStatus from '../../components/ContentStatus/ContentStatus'

const ShowDeliverable = (props) => {
  const { cohortId } = props
  const navigate = useNavigate()
  const { deliverableId } = useParams()
  const mutation = useDeliverablesManager(cohortId)
  const { deliverable, status } = useShowDeliverable(deliverableId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />
  if (deliverable.cohort !== cohortId) return <Navigate to='/deliverables' />

  const handleDelete = () => {
    mutation.mutate({ type: 'remove', payload: { deliverableId: deliverableId } })
    navigate('/deliverables')
  }

  const handleSquad = (profileId, squadData) => {
    mutation.mutate({
      type: 'updateStudentSquad',
      payload: { profileId: profileId, squadData: squadData, deliverableId }
    })
  }

  return (
    <section>
      <h1>{deliverable.name}</h1>

      {deliverable.dueDate}
      {deliverable.dueDate}

      <h2>Requirements</h2>
      <RequirementsList deliverable={deliverable} />

      {deliverable.students.map((student) => (
        <StudentDeliverableRow
          key={student._id}
          student={student}
          handleSquad={handleSquad}
          deliverableId={deliverableId}
        />
      ))}

      <button onClick={handleDelete}>Delete</button>

    </section>
  )
}

export default ShowDeliverable
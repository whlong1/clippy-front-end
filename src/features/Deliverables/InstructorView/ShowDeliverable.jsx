import { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

// Hooks
import { useShowDeliverable } from '../../../hooks/useShowDeliverable'
import { useDeliverablesManager } from '../../../hooks/useDeliverablesManager'

// Components
import Popup from '../../../layouts/Popup'
import DeliverableHeader from './DeliverableHeader'
import StudentDeliverableRow from './StudentDeliverableRow'
import ContentStatus from '../../../components/ContentStatus/ContentStatus'
import DeleteConfirmation from '../../../components/DeleteConfirmation/DeleteConfirmation'

const ShowDeliverable = (props) => {
  const { cohortId } = props
  const navigate = useNavigate()
  const { deliverableId } = useParams()
  const [isOpen, setIsOpen] = useState(false)

  const mutation = useDeliverablesManager(cohortId)
  const { deliverable, status } = useShowDeliverable(deliverableId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />
  if (deliverable.cohort !== cohortId) return <Navigate to='/deliverables' />

  const handleDelete = () => {
    mutation.mutate({
      type: 'remove', payload: { deliverableId: deliverableId }
    })
    navigate('/deliverables')
  }

  // Bulk update on associated studentDeliverables:
  const markAllComplete = () => {
    const formData = {
      status: "complete", gradedBy: props.profile.name,
    }
    mutation.mutate({
      type: 'markAllComplete', payload: { deliverableId, formData }
    })
  }

  const handleSquad = (profileId, squadData) => {
    mutation.mutate({
      type: 'updateStudentSquad',
      payload: { profileId: profileId, squadData: squadData, deliverableId }
    })
  }
  
  const sortedByNormalizedName = deliverable.students.sort((a, b) => {
    return a.normalizedName > b.normalizedName ? 1 : -1
  })

  return (
    <section style={{ position: 'relative' }}>
      <Popup isOpen={isOpen}>
        <DeleteConfirmation
          setIsOpen={setIsOpen}
          title="Delete Deliverable"
          handleDelete={handleDelete}
        />
      </Popup>

      <DeliverableHeader
        setIsOpen={setIsOpen}
        deliverable={deliverable}
        handleDelete={handleDelete}
        markAllComplete={markAllComplete}
      />

      {sortedByNormalizedName.map((student) => (
        <StudentDeliverableRow
          key={student._id}
          student={student}
          handleSquad={handleSquad}
          deliverableId={deliverableId}
        />
      ))}
    </section>
  )
}

export default ShowDeliverable
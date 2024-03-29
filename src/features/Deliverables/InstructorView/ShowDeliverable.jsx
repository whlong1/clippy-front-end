import { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

// Hooks
import { useShowDeliverable } from '../../../hooks/useShowDeliverable'
import { useDeliverablesManager } from '../../../hooks/useDeliverablesManager'

// Components
import CopyColumnPopup from '../components/CopyColumnPopup/CopyColumnPopup'
import DeliverableHeader from './DeliverableHeader'
import StudentDeliverableRow from './StudentDeliverableRow'
import ContentStatus from '../../../components/ContentStatus/ContentStatus'
import DeleteConfirmation from '../../../components/DeleteConfirmation/DeleteConfirmation'

const ShowDeliverable = (props) => {
  const { cohortId } = props

  const navigate = useNavigate()
  const { deliverableId } = useParams()

  const [isCopyOpen, setIsCopyOpen] = useState(false)
  const [isDeleteOpen, setIsDeleteOpen] = useState(false)

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
      status: "complete", gradedBy: props.profile.firstName,
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
      <CopyColumnPopup
        id={deliverableId}
        isOpen={isCopyOpen}
        setIsOpen={setIsCopyOpen}
        deliverable={deliverable}
      />

      <DeleteConfirmation
        id={deliverableId}
        isOpen={isDeleteOpen}
        title="Delete Deliverable"
        setIsOpen={setIsDeleteOpen}
        handleDelete={handleDelete}
      />

      <DeliverableHeader
        deliverable={deliverable}
        handleDelete={handleDelete}
        setIsCopyOpen={setIsCopyOpen}
        setIsDeleteOpen={setIsDeleteOpen}
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
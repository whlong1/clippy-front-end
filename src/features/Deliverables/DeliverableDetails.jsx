import { useParams } from 'react-router-dom'

// Hooks
import { useDeliverableDetails } from '../../hooks/useDeliverableDetails'

// Components
import StudentDeliverableRow from './StudentDeliverableRow'
import RequirementsList from './RequirementsList'

const DeliverableDetails = (props) => {
  // const { user, cohortId } = props
  const { deliverableId } = useParams()
  const { deliverableDetails, status } = useDeliverableDetails(deliverableId)
  console.log('Deliverable Details:', deliverableDetails)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <h1>
        {deliverableDetails.name}
      </h1>

      {deliverableDetails.dueDate}
      {deliverableDetails.dueDate}

      <h2>Requirements</h2>
      <RequirementsList deliverable={deliverableDetails} />


      {deliverableDetails.students.map((student) => (
        <StudentDeliverableRow
          key={student._id}
          student={student}
          deliverableId={deliverableId}
        />
      ))}
    </section>
  )
}

export default DeliverableDetails 
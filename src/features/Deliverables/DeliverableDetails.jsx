import { useParams } from 'react-router-dom'

// Hooks
import { useDeliverableDetails } from '../../hooks/useDeliverableDetails'

// Components
import StudentDeliverableRow from './StudentDeliverableRow'

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

      <p>
        hasMiscUrl: {deliverableDetails.hasMiscUrl}
      </p>
      <p>
        hasGitHubUrl:{deliverableDetails.hasGitHubUrl}
      </p>
      <p>
        hasTrelloUrl: {deliverableDetails.hasTrelloUrl}
      </p>
      <p>
        hasDeploymentUrl: {deliverableDetails.hasDeploymentUrl}
      </p>
      <p>
        hasCodeSandboxUrl: {deliverableDetails.hasCodeSandboxUrl}
      </p>

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
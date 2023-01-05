import { useParams } from "react-router-dom"

// Hooks 
import { useMyDeliverableDetails } from "../../hooks/useMyDeliverableDetails"

const MyDeliverableDetails = (props) => {
  // conditionally render 2 views here (pre/post submit)

  const { studentDeliverableId } = useParams()
  const { myDeliverableDetails, status } = useMyDeliverableDetails(studentDeliverableId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <p>My Deliverable Details</p>
      {myDeliverableDetails.name}
      <p>due date</p>
      {myDeliverableDetails.dueDate}
      <p>notion url:</p>
      {myDeliverableDetails.notionUrl}
      <p>requirements/urls</p>
      <p>
        hasMiscUrl: {myDeliverableDetails.hasMiscUrl}
      </p>
      <p>
        hasGitHubUrl:{myDeliverableDetails.hasGitHubUrl}
      </p>
      <p>
        hasTrelloUrl: {myDeliverableDetails.hasTrelloUrl}
      </p>
      <p>
        hasDeploymentUrl: {myDeliverableDetails.hasDeploymentUrl}
      </p>
      <p>
        hasCodeSandboxUrl: {myDeliverableDetails.hasCodeSandboxUrl}
      </p>

      <p>status</p>
      {myDeliverableDetails.status}
      <p>feedback</p>
      <p>submission materials</p>
      <button>Update Deliverable</button>
    </section>
  )
}

export default MyDeliverableDetails
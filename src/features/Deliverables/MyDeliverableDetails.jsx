import { useParams } from "react-router-dom"

// Components
import RequirementsList from "./RequirementsList"

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
      <h1>{myDeliverableDetails.name}</h1>
      <p>My Deliverable Details (student view)</p>

      <h2>due date</h2>
      {myDeliverableDetails.dueDate}
      <h2>notion url:</h2>
      {myDeliverableDetails.notionUrl}
      <p>requirements/urls</p>
      <h2>Requirements</h2>
      <RequirementsList deliverable={myDeliverableDetails} />
      <p>status</p>
      {myDeliverableDetails.status}
      <p>feedback</p>
      <p>submission materials</p>
      <button>Update Deliverable</button>
    </section>
  )
}

export default MyDeliverableDetails
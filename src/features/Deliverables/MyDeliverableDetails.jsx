import { useParams } from "react-router-dom"

// Components
import Requirements from "./Requirements"

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
      <p>My Deliverable Details (student view)</p>
      <h1>{myDeliverableDetails.name}</h1>

      <p>due date</p>
      {myDeliverableDetails.dueDate}
      <p>notion url:</p>
      {myDeliverableDetails.notionUrl}
      <p>requirements/urls</p>
      <h2>Requirements</h2>
      <Requirements deliverable={myDeliverableDetails} />
      <p>status</p>
      {myDeliverableDetails.status}
      <p>feedback</p>
      <p>submission materials</p>
      <button>Update Deliverable</button>
    </section>
  )
}

export default MyDeliverableDetails
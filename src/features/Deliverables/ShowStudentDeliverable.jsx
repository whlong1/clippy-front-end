import { useParams } from "react-router-dom"

// Components
import RequirementsList from "./RequirementsList"
import StudentSubmissionPanel from './StudentSubmissionPanel'

// Hooks 
import { useShowStudentDeliverable } from "../../hooks/useShowStudentDeliverable"

// Student Only View
const ShowStudentDeliverable = (props) => {
  // conditionally render 2 views here (pre/post submit)

  const { studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      <h1>{studentDeliverable.name}</h1>
      <p>My Deliverable Details (student view)</p>

      <h2>due date</h2>
      {studentDeliverable.dueDate}
      <h2>notion url:</h2>
      {studentDeliverable.notionUrl}
      <p>requirements/urls</p>
      <h2>Requirements</h2>
      <RequirementsList deliverable={studentDeliverable} />
      <p>status</p>
      {studentDeliverable.status}
      <p>feedback</p>

      <StudentSubmissionPanel />

      <button>Update Deliverable</button>
    </section>
  )
}

export default ShowStudentDeliverable
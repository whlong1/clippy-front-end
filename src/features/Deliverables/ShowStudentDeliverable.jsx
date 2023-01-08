import { useParams } from "react-router-dom"

// Components
import RequirementsList from "./RequirementsList"
import StudentSubmissionPanel from './StudentSubmissionPanel'

// Hooks 
import { useShowStudentDeliverable } from "../../hooks/useShowStudentDeliverable"

// Student Only View
const ShowStudentDeliverable = ({ cohortId }) => {
  const { studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  console.log('DEETS', studentDeliverable)

  return (
    <section>
      <h1>{studentDeliverable.name} (student view)</h1>

      <h2>due date</h2>
      {studentDeliverable.dueDate}
      <h2>notion url:</h2>
      {studentDeliverable.notionUrl}
      <p>requirements/urls</p>
      <h2>Requirements</h2>
      <RequirementsList deliverable={studentDeliverable} />

      <h3>Status::: {studentDeliverable.status}</h3>


      {studentDeliverable.hasNewStatus && <h3>New Feedback!</h3>}

      <StudentSubmissionPanel
        cohortId={cohortId}
        studentDeliverable={studentDeliverable}
      />

    </section>
  )
}

export default ShowStudentDeliverable
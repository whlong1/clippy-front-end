import { useParams } from "react-router-dom"

// Hooks
import { useStudentDeliverable } from '../../hooks/useStudentDeliverable'

const GradeStudentDeliverable = () => {
  // Instructor can make request to /:sdId/grade' from here
  const { deliverableId, studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useStudentDeliverable(studentDeliverableId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const {
    name,
    dueDate,
    hasMiscUrl,
    hasNewStatus,
    hasTrelloUrl,
    hasGitHubUrl,
    hasDeploymentUrl,
    hasCodeSandboxUrl,
    profile: { preferredName, lastName },
  } = studentDeliverable
  // ^^ Additional props here after student submits deliverable


  const studentName = `${preferredName} ${lastName}`
  const title = `Grade ${name} for ${studentName}`
 
  return (
    <section>

      <h1>{title}</h1>
      <p>{dueDate}</p>

      <p>URLS:</p>

      hasMiscUrl {hasMiscUrl}
      hasNewStatus {hasNewStatus}
      hasTrelloUrl {hasTrelloUrl}
      hasGitHubUrl {hasGitHubUrl}
      hasDeploymentUrl {hasDeploymentUrl}
      hasCodeSandboxUrl {hasCodeSandboxUrl}

      <textarea></textarea>
      <pre>Code Editor Placeholder</pre>

      STATUS:::
      <select>
        <option value='assigned'>Assigned</option>
        <option value='complete'>Pending Audit</option>
        <option value='incomplete'>Complete</option>
        <option value='missing'>Incomplete</option>
        <option value='pendingAudit'>Missing</option>
      </select>

      <button>Submit Grade</button>
    </section>
  )
}

export default GradeStudentDeliverable
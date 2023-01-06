import { useState } from "react"
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"

const StudentSubmissionPanel = (props) => {
  const { cohortId, studentDeliverable } = props
  const mutation = useDeliverablesManager(cohortId)
  const [deliverableData, setDeliverableData] = useState(studentDeliverable)

  const submitDeliverable = () => {
    mutation.mutate({ type: 'submit', payload: deliverableData })
  }

  const markFeedbackAsRead = () => {
    mutation.mutate({ type: 'submit', payload: { ...deliverableData, hasNewStatus: false } })
  }

  const handleChange = ({ target }) => {
    setDeliverableData({ ...deliverableData, [target.name]: target.value })
  }

  return (
    <div>
      <label htmlFor="gitHubUrl">Submission Link Example:</label>

      <input
        type="text"
        id="gitHubUrl"
        name="gitHubUrl"
        onChange={handleChange}
        value={deliverableData.gitHubUrl || ''}
      />

      <button onClick={submitDeliverable}>Submit Deliverable</button>
      
      <button onClick={markFeedbackAsRead}>Mark Feedback as Read</button>

      <button>Update Deliverable</button>

    </div>
  )
}

export default StudentSubmissionPanel
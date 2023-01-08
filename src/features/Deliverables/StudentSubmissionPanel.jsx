import { useState } from "react"
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"

// This component needs a better name...
const StudentSubmissionPanel = (props) => {
  const { cohortId, studentDeliverable } = props
  const mutation = useDeliverablesManager(cohortId)
  const isNewDeliverable = studentDeliverable.status === 'assigned'
  const [isFormActive, setIsFormActive] = useState(isNewDeliverable)
  const [deliverableData, setDeliverableData] = useState(studentDeliverable)

  const submitDeliverable = () => {
    mutation.mutate({ type: 'submit', payload: deliverableData })
    setIsFormActive(false)
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
        disabled={!isFormActive}
        value={deliverableData.gitHubUrl || ''}
      />

      {isFormActive
        ? <button onClick={submitDeliverable}>Submit Deliverable</button>
        : <button onClick={() => setIsFormActive(true)}>Update Materials</button>
      }

      {deliverableData.hasNewStatus &&
        <button onClick={markFeedbackAsRead}>Mark Feedback as Read</button>
      }
    </div>
  )
}

export default StudentSubmissionPanel
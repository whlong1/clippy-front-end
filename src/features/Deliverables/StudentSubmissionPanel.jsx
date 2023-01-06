import { useState } from "react"
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"

const StudentSubmissionPanel = (props) => {
  const { cohortId, studentDeliverable } = props

  const [deliverableData, setDeliverableData] = useState(studentDeliverable)

  const mutation = useDeliverablesManager(cohortId)

  const submitDeliverable = () => {
    const formData = {
      ...deliverableData,
      studentDeliverableId: studentDeliverable._id
    }
    // pass in studentDeliverableId
    mutation.mutate({ type: 'submit', payload: formData })
  }

  const handleChange = ({ target }) => {
    console.log(target)
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


      <button>Update Deliverable</button>
      <button>Mark Feedback as Read</button>
    </div>
  )
}

export default StudentSubmissionPanel
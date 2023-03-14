import { useState, useEffect } from "react"
import { useDeliverablesManager } from "../../../hooks/useDeliverablesManager"
import "./StudentView.css"

// This component needs a better name...
const SubmissionPanel = (props) => {
  const { cohortId, studentDeliverable } = props
  const mutation = useDeliverablesManager(cohortId)
  const [isFormActive, setIsFormActive] = useState(studentDeliverable)
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

  useEffect(() => {
    setDeliverableData(studentDeliverable)
  }, [studentDeliverable, setDeliverableData])

  const submissionForm = (
    <div>
      <span>
        <h2>Submision</h2>
        {isFormActive
          ? <button onClick={submitDeliverable}>SUBMIT</button>
          : <button onClick={() => setIsFormActive(true)}>UPDATE</button>
        }
      </span>
      <input
        type="text"
        id="gitHubUrl"
        name="gitHubUrl"
        onChange={handleChange}
        disabled={!isFormActive}
        value={deliverableData.gitHubUrl || ''}
      />
    </div>
  )

  // const newFeedback = (
  //   <div>
  //     <span>
  //       <h2>New Feedback</h2>
  //       <button onClick={markFeedbackAsRead}>MARK READ</button>
  //     </span>
  //   </div>
  // )

  return (
    <div className="confirmation">
      <h1>Submission</h1>
      <p>
        Text
      </p>
      <section>
        <button onClick={submitDeliverable}>SUBMIT</button>
      </section>
    </div>
  )
}

export default SubmissionPanel
import { useState, useEffect } from "react"
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"

// Components
import GradingNotes from "./GradingNotes"
import CodeEditor from "./CodeEditor/CodeEditor"
import StudentSubmissionPanel from './StudentSubmissionPanel'

const SubmisionAndFeedback = (props) => {
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


  return (
    <section>
      s+f
    </section>
  )
}

export default SubmisionAndFeedback

{/* <StudentSubmissionPanel
cohortId={cohortId}
studentDeliverable={studentDeliverable}
/>
{studentDeliverable.gradingNotes &&
<GradingNotes
  gradingNotes={studentDeliverable.gradingNotes}
/>
}
{studentDeliverable.codeblock &&
<CodeEditor
  formData={studentDeliverable}
/>
} */}


// const submissionForm = (
//   <div>
//     <span>
//       <h2>Submision</h2>
//       {isFormActive
//         ? <button onClick={submitDeliverable}>SUBMIT</button>
//         : <button onClick={() => setIsFormActive(true)}>UPDATE</button>
//       }
//     </span>
//     <input
//       type="text"
//       id="gitHubUrl"
//       name="gitHubUrl"
//       onChange={handleChange}
//       disabled={!isFormActive}
//       value={deliverableData.gitHubUrl || ''}
//     />
//   </div>
// )

// const newFeedback = (
//   <div>
//     <span>
//       <h2>New Feedback</h2>
//       <button onClick={markFeedbackAsRead}>MARK READ</button>
//     </span>
//   </div>
// )
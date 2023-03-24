import { useState } from "react"
import { useDeliverablesManager } from "../../../../hooks/useDeliverablesManager"
import './styles/SubmissionAndFeedback.css'

// Components
import Popup from '../../../../layouts/Popup'
import Feedback from "./Feedback"
import SubmissionPanel from './SubmissionPanel'
import SubmittedLink from "../SubmittedLink/SubmittedLink"

// Helpers
import { filterDeliverableUrls } from "../../helpers/helpers"

const SubmisionAndFeedback = ({ cohortId, studentDeliverable, adminView }) => {
  const [isOpen, setIsOpen] = useState(false)
  const mutation = useDeliverablesManager(cohortId)

  const submitDeliverable = (deliverableData) => {
    setIsOpen(false)
    mutation.mutate({ type: 'submit', payload: deliverableData })
  }

  const markFeedbackAsRead = () => {
    mutation.mutate({ type: 'submit', payload: { ...studentDeliverable, hasNewStatus: false } })
  }

  const filteredUrls = filterDeliverableUrls(studentDeliverable)

  const urlLinks = (
    <div>
      {filteredUrls.map((url, idx) => (
        <SubmittedLink
          key={idx}
          url={url}
          studentDeliverable={studentDeliverable}
          styleProp={{ fontSize: '14px', marginRight: '8px' }}
        />
      ))}
    </div>
  )

  return (
    <section className="submissionAndFeedback">
      <Popup isOpen={isOpen}>
        <SubmissionPanel
          setIsOpen={setIsOpen}
          submitDeliverable={submitDeliverable}
          studentDeliverable={studentDeliverable}
        />
      </Popup>

      {!studentDeliverable.hasQuiz &&
        <header>
          <span>
            <h2>Submitted Materials</h2>
            <h3>{filteredUrls.length ? urlLinks : 'No materials submitted'}</h3>
          </span>
          <button onClick={() => setIsOpen((prev) => !prev)}>ADD LINKS</button>
        </header>
      }

      <header>
        <span>
          <h2>Feedback</h2>
          {studentDeliverable.gradedBy ? <h3>Graded by {studentDeliverable.gradedBy}</h3> : <h3>Pending</h3>}
        </span>
        {studentDeliverable.hasNewStatus && !adminView && <button onClick={markFeedbackAsRead}>MARK READ</button>}
      </header>

      {!adminView && <Feedback studentDeliverable={studentDeliverable} />}

    </section>
  )
}

export default SubmisionAndFeedback
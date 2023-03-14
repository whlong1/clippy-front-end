import { useState } from "react"
import { useDeliverablesManager } from "../../../hooks/useDeliverablesManager"
import "./styles/StudentView.css"

// Assets
import share from '../../../assets/icons/share.svg'

// Components
import Popup from '../../../layouts/Popup'
import Feedback from "./Feedback"
import SubmissionPanel from './SubmissionPanel'
import ExternalLink from "../../../components/ExternalLink/ExternalLink"

const SubmisionAndFeedback = ({ cohortId, studentDeliverable }) => {
  const [isOpen, setIsOpen] = useState(false)
  const mutation = useDeliverablesManager(cohortId)

  const submitDeliverable = (deliverableData) => {
    setIsOpen(false)
    mutation.mutate({ type: 'submit', payload: deliverableData })
  }

  const markFeedbackAsRead = () => {
    mutation.mutate({ type: 'submit', payload: { ...studentDeliverable, hasNewStatus: false } })
  }

  const urlTable = {
    miscUrl: { text: 'Misc URL', link: studentDeliverable.miscUrl },
    trelloUrl: { text: 'Trello', link: studentDeliverable.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: studentDeliverable.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: studentDeliverable.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: studentDeliverable.codeSandboxUrl },
  }

  const filteredUrls = Object.keys(urlTable).filter((url) => studentDeliverable.hasOwnProperty(url))
  const urlLinks = (
    <div>
      {filteredUrls.map((url, idx) => (
        <ExternalLink key={idx} urlString={urlTable[url].link}>
          <p style={{ fontSize: '14px', marginRight: '8px' }}>
            {urlTable[url].text}
            <img src={share} alt="share" />
          </p>
        </ExternalLink>
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

      <header>
        <span>
          <h2>Submitted Materials</h2>
          <h3>{filteredUrls.length ? urlLinks : 'No materials submitted'}</h3>
        </span>
        <button onClick={() => setIsOpen((prev) => !prev)}>ADD LINKS</button>
      </header>

      {studentDeliverable.gradedBy && studentDeliverable.gradingNotes &&
        <header>
          <span>
            <h2>Feedback</h2>
            <h3>Graded by {studentDeliverable.gradedBy}</h3>
          </span>
          {studentDeliverable.hasNewStatus &&
            <button onClick={markFeedbackAsRead}>MARK READ</button>
          }
        </header>
      }
      <Feedback studentDeliverable={studentDeliverable} />
    </section>
  )
}

export default SubmisionAndFeedback
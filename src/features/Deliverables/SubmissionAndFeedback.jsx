import { useState } from "react"
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"

// Assets
import share from '../../assets/icons/share.svg'

// Components
import Popup from '../../layouts/Popup'
import Feedback from "./StudentView/Feedback"
import SubmissionPanel from './StudentView/SubmissionPanel'
import ExternalLink from "../../components/ExternalLink/ExternalLink"

const SubmisionAndFeedback = ({ cohortId, studentDeliverable }) => {
  const [isOpen, setIsOpen] = useState(false)
  const mutation = useDeliverablesManager(cohortId)

  const submitDeliverable = (deliverableData) => {
    setIsOpen(false)
    mutation.mutate({ type: 'submit', payload: deliverableData })
  }

  const markFeedbackAsRead = (deliverableData) => {
    mutation.mutate({ type: 'submit', payload: { ...deliverableData, hasNewStatus: false } })
  }

  const urlTable = {
    miscUrl: { text: 'Misc URL', link: studentDeliverable.miscUrl },
    trelloUrl: { text: 'Trello', link: studentDeliverable.trelloUrl },
    gitHubUrl: { text: 'GitHub', link: studentDeliverable.gitHubUrl },
    deploymentUrl: { text: 'Deployment', link: studentDeliverable.deploymentUrl },
    codeSandboxUrl: { text: 'Code Sandbox', link: studentDeliverable.codeSandboxUrl },
  }

  const filteredUrls = Object.keys(urlTable).filter((url) => studentDeliverable.hasOwnProperty(url))
  const urlLinks = filteredUrls.map((url, idx) => (
    <ExternalLink key={idx} urlString={urlTable[url].link}>
      <p>
        {urlTable[url].text}
        <img src={share} alt="share" />
      </p>
    </ExternalLink>
  ))

  return (
    <section>
      <Popup isOpen={isOpen}>
        <SubmissionPanel
          setIsOpen={setIsOpen}
          submitDeliverable={submitDeliverable}
          studentDeliverable={studentDeliverable}
        />
      </Popup>

      <header>
        <h2>Submitted Materials</h2>
        <h3>{urlLinks.length ? urlLinks : 'No materials submitted'}</h3>
        <button onClick={() => setIsOpen((prev) => !prev)}>ADD</button>
      </header>

      {studentDeliverable.gradedBy &&
        <header>
          <h2>Feedback</h2>
          <h3>Graded by {studentDeliverable.gradedBy}</h3>
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
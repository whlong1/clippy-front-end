import { useState, useEffect } from 'react'

// Components
import DueDate from './DueDate'
import SubmissionTracker from './SubmissionTracker'
import RequirementTags from './RequirementTags/RequirementTags'
import ExternalLink from '../../components/ExternalLink/ExternalLink'

// Assets
import share from '../../assets/icons/share.svg'

const DeliverableHeader = (props) => {
  const {
    setIsOpen,
    deliverable,
    markAllComplete
  } = props

  const [copied, setCopied] = useState(false)

  const statusTable = {
    missing: "Missing",
    complete: "Complete",
    incomplete: "Incomplete",
  }

  const deliverableRecord = deliverable.students.map((s) =>
    statusTable[s.status] ? statusTable[s.status] + "\n" : "\n"
  )

  useEffect(() => {
    const resetCopy = () => {
      setTimeout(() => setCopied(false), 2000)
    }
    if (copied) resetCopy()
  }, [copied])

  const handleCopy = () => {
    setCopied(true)
    navigator.clipboard.writeText(deliverableRecord.join(""))
  }

  return (
    <header className="header">

      <section>
        <h1>
          <ExternalLink urlString={deliverable.notionUrl}>
            {deliverable.name}
            <img src={share} alt="share icon" />
          </ExternalLink>
        </h1>
        <button onClick={markAllComplete}>
          RESOLVE
        </button>
        <button onClick={() => setIsOpen((prev) => !prev)}>
          DELETE
        </button>
        <button onClick={handleCopy}>
          {copied ? "COPIED" : "COPY"}
        </button>
      </section>

      <section>
        <DueDate date={deliverable.dueDate} />
        <RequirementTags deliverable={deliverable} />
        <SubmissionTracker deliverable={deliverable} />
      </section>

    </header>
  )
}

export default DeliverableHeader
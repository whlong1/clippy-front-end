import { useState, useEffect } from 'react'

// Components
import DueDate from './DueDate'
import RequirementsList from './RequirementsList'
import SubmissionTracker from './SubmissionTracker'

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
  console.log(deliverable.notionUrl)

  return (
    <header className="header">

      <section>
        <h1>
          <a className="externalUrl" target="_blank" rel="noreferrer" href={deliverable.notionUrl}>
            {deliverable.name}
            <img src={share} alt="share icon" />
          </a>
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
        <RequirementsList deliverable={deliverable} />
        <SubmissionTracker deliverable={deliverable} />
      </section>

    </header>
  )
}

export default DeliverableHeader
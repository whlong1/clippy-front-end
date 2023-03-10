import { useState, useEffect } from 'react'

// Components
import DueDate from './DueDate'
import RequirementsList from './RequirementsList'
import SubmissionTracker from './SubmissionTracker'

const DeliverableHeader = (props) => {
  const {
    setIsOpen,
    deliverable,
    handleDelete,
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
        <h1>{deliverable.name}</h1>
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
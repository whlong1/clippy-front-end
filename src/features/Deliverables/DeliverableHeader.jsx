import RequirementsList from './RequirementsList'
import SubmissionTracker from './SubmissionTracker'
import DueDate from './DueDate'

const DeliverableHeader = ({ deliverable, handleDelete }) => {

  const statusTable = {
    missing: "Missing",
    complete: "Complete",
    incomplete: "Incomplete",
  }

  const deliverableRecord = deliverable.students.map((s) =>
    statusTable[s.status] ? statusTable[s.status] + "\n" : "\n"
  ).join("")

  return (
    <header className="header">

      <section>
        <h1>{deliverable.name}</h1>
        <button onClick={handleDelete}>Delete</button>
        <button onClick={() => navigator.clipboard.writeText(deliverableRecord)}>
          Copy
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
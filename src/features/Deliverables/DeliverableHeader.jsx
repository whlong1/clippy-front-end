import RequirementsList from './RequirementsList'
import SubmissionTracker from './SubmissionTracker'
import FormatDate from '../../components/FormatDate/FormatDate'

const DeliverableHeader = ({ deliverable, handleDelete }) => {

  return (
    <header className="header">

      <section>
        <h1>{deliverable.name}</h1>
        <button>Copy</button>
        <button onClick={handleDelete}>Delete</button>
      </section>

      <section>
        <FormatDate date={deliverable.dueDate} />
        <RequirementsList deliverable={deliverable} />
        <SubmissionTracker deliverable={deliverable} />
      </section>

    </header>
  )
}

export default DeliverableHeader
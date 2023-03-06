// Components
import DueDate from './DueDate'
import RequirementsList from './RequirementsList'

const StudentDeliverableHeader = ({ deliverable }) => {

  return (
    <header className="header">
      <section>
        <h1>{deliverable.name}</h1>
      </section>

      <section>
        <DueDate date={deliverable.dueDate} />
        <RequirementsList deliverable={deliverable} />
      </section>
    </header>
  )
}

export default StudentDeliverableHeader
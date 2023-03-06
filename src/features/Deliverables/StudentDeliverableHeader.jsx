// Components
import DueDate from './DueDate'
import RequirementsList from './RequirementsList'
import StudentDeliverableStatus from './StudentDeliverableStatus'

const StudentDeliverableHeader = ({ title, deliverable }) => {

  return (
    <header className="header">
      <section>
        <h1>{title}</h1>
      </section>

      <section>
        <DueDate date={deliverable.dueDate} />
        <RequirementsList deliverable={deliverable} />
        <StudentDeliverableStatus deliverable={deliverable} />
      </section>
    </header>
  )
}

export default StudentDeliverableHeader
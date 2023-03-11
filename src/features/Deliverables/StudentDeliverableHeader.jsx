// Components
import DueDate from './DueDate'
import StudentDisplay from './StudentDisplay'
import RequirementsList from './RequirementsList'
import DeliverableStatusSelect from './DeliverableStatusSelect'
import StudentDeliverableStatus from './StudentDeliverableStatus'

const StudentDeliverableHeader = (props) => {
  const { title, deliverable, formData, handleChange, handleGrade } = props

  return (
    <header className="header">
      <section>
        <h1>{title}</h1>
        <DeliverableStatusSelect
          formData={formData}
          handleChange={handleChange}
        />
        <button onClick={handleGrade}>SUBMIT</button>
      </section>

      <section>
        <DueDate date={deliverable.dueDate} />
        <RequirementsList deliverable={deliverable} />
        <StudentDeliverableStatus deliverable={deliverable} />
        <StudentDisplay profile={deliverable.profile} />
      </section>
    </header>
  )
}

export default StudentDeliverableHeader
// Components
import DueDate from './DueDate'
import StudentDisplay from './StudentDisplay'
import RequirementTags from './RequirementTags/RequirementTags'
import SubmittedMaterials from './SubmittedMaterials'
import DeliverableStatusSelect from './DeliverableStatusSelect'

const GradeDeliverableHeader = (props) => {
  const { title, deliverable, formData, handleChange, handleGrade } = props

  return (
    <header className="header">
      <section>
        <h1 className="deliverableTitle">{title}</h1>
        <DeliverableStatusSelect
          formData={formData}
          handleChange={handleChange}
        />
        <button onClick={handleGrade}>SUBMIT</button>
      </section>

      <section>
        <StudentDisplay profile={deliverable.profile} />
        <DueDate date={deliverable.dueDate} />
        <RequirementTags deliverable={deliverable} />
        <SubmittedMaterials deliverable={deliverable} />
      </section>

    </header>
  )
}

export default GradeDeliverableHeader
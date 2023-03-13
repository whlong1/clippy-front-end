import { useParams } from "react-router-dom"

// Components

import DueDate from './DueDate'
import StudentSubmissionPanel from './StudentSubmissionPanel'
import RequirementTags from "./RequirementTags/RequirementTags"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

// Hooks 
import { useShowStudentDeliverable } from "../../hooks/useShowStudentDeliverable"

// Student Only View
const ShowStudentDeliverable = ({ cohortId }) => {
  const { studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  console.log(studentDeliverable)

  return (
    <section>
      {/* <StudentDeliverableHeader deliverable={studentDeliverable} /> */}
      <header className="header">
        <section>
          <h1>{studentDeliverable.name}</h1>
          {/* <DeliverableStatusSelect
            formData={formData}
            handleChange={handleChange}
          /> */}
          {/* <button onClick={handleGrade}>SUBMIT</button> */}
        </section>

        <section>
        <DueDate date={studentDeliverable.dueDate} />
        <RequirementTags deliverable={studentDeliverable} />
          {/* <StudentDisplay profile={deliverable.profile} /> */}
          {/* <DueDate date={studentDeliverable.dueDate} />
          <RequirementTags deliverable={studentDeliverable} />
          <SubmittedMaterials deliverable={studentDeliverable} /> */}
        </section>

      </header>


      <h1>{studentDeliverable.name} (student view)</h1>
      <h2>due date</h2>
      {studentDeliverable.dueDate}
      <h2>notion url:</h2>
      {studentDeliverable.notionUrl}

      <RequirementTags deliverable={studentDeliverable} />

      <h3>Status::: {studentDeliverable.status}</h3>

      {studentDeliverable.hasNewStatus && <h3>New Feedback!</h3>}

      <StudentSubmissionPanel
        cohortId={cohortId}
        studentDeliverable={studentDeliverable}
      />

    </section>
  )
}

export default ShowStudentDeliverable
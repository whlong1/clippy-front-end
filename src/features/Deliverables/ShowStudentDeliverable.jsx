import { useParams } from "react-router-dom"

// Components
import DueDate from './DueDate'
import GradingNotes from "./GradingNotes"
import StudentStatus from "./StudentStatus"
import CodeEditor from "./CodeEditor/CodeEditor"
import SubmittedMaterials from './SubmittedMaterials'
import StudentSubmissionPanel from './StudentSubmissionPanel'
import RequirementTags from "./RequirementTags/RequirementTags"
import ExternalLink from "../../components/ExternalLink/ExternalLink"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

// Assets
import share from '../../assets/icons/share.svg'

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
    <section className="studentDeliverable">
      <header className="header">
        <section>
          <h1>
            <ExternalLink urlString={studentDeliverable.notionUrl}>
              {studentDeliverable.name}
              <img src={share} alt="share icon" />
            </ExternalLink>
          </h1>
        </section>
        <section>
          <DueDate date={studentDeliverable.dueDate} />
          <RequirementTags deliverable={studentDeliverable} />
          <StudentStatus status={studentDeliverable.status} />
          <SubmittedMaterials deliverable={studentDeliverable} />
        </section>
      </header>

      {/* {studentDeliverable.hasNewStatus && <h3>New Feedback!</h3>} */}

      <StudentSubmissionPanel
        cohortId={cohortId}
        studentDeliverable={studentDeliverable}
      />

      <GradingNotes
        gradingNotes={studentDeliverable.gradingNotes}
      />
      <CodeEditor
        formData={studentDeliverable}
        // setFormData={setFormData}
      />

    </section>
  )
}

export default ShowStudentDeliverable
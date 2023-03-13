import { useParams } from "react-router-dom"

// Assets
import share from '../../assets/icons/share.svg'

// Components
import DueDate from './DueDate'
import GradingNotes from "./GradingNotes"
import StudentStatus from "./StudentStatus"
import CodeEditor from "./CodeEditor/CodeEditor"
// import SubmittedMaterials from './SubmittedMaterials'
import StudentSubmissionPanel from './StudentSubmissionPanel'
import RequirementTags from "./RequirementTags/RequirementTags"
import ExternalLink from "../../components/ExternalLink/ExternalLink"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

// Hooks 
import { useShowStudentDeliverable } from "../../hooks/useShowStudentDeliverable"

// Student Only View
const ShowStudentDeliverable = ({ cohortId }) => {
  const { studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  console.log(studentDeliverable.name, studentDeliverable.hasNewStatus, studentDeliverable._id)

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
          {/* <SubmittedMaterials deliverable={studentDeliverable} /> */}
        </section>
      </header>

      <StudentSubmissionPanel
        cohortId={cohortId}
        studentDeliverable={studentDeliverable}
      />
      {studentDeliverable.gradingNotes &&
        <GradingNotes
          gradingNotes={studentDeliverable.gradingNotes}
        />
      }
      {studentDeliverable.codeblock &&
        <CodeEditor
          formData={studentDeliverable}
        />
      }

    </section>
  )
}

export default ShowStudentDeliverable
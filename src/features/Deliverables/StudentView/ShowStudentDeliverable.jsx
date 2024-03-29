import { useParams } from "react-router-dom"

// Assets
import share from '../../../assets/icons/share.svg'

// Components
import DueDate from '../components/DueDate/DueDate'
import StudentStatus from "./StudentStatus"
import SubmisionAndFeedback from "../components/SubmissionAndFeedback/SubmissionAndFeedback"
import RequirementTags from "../components/RequirementTags/RequirementTags"
import ExternalLink from "../../../components/ExternalLink/ExternalLink"
import ContentStatus from "../../../components/ContentStatus/ContentStatus"

// Hooks 
import { useShowStudentDeliverable } from "../../../hooks/useShowStudentDeliverable"

// Student Only View
const ShowStudentDeliverable = ({ cohortId }) => {
  const { studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  return (
    <section className="studentDeliverable" style={{ position: 'relative' }}>
      <header className="header">
        <section>
          <h1>
            <ExternalLink urlString={studentDeliverable.notionUrl} isTitle={true}>
              {studentDeliverable.name}
              <img src={share} alt="share icon" />
            </ExternalLink>
          </h1>
        </section>
        <section>
          <DueDate date={studentDeliverable.dueDate} />
          <RequirementTags deliverable={studentDeliverable} />
          <StudentStatus status={studentDeliverable.status} />
        </section>
      </header>
      <SubmisionAndFeedback
        cohortId={cohortId}
        studentDeliverable={studentDeliverable}
      />
    </section>
  )
}

export default ShowStudentDeliverable
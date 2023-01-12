import { Link } from "react-router-dom"

// Components
import ExternalUrls from "./ExternalUrls"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentDeliverableRow = ({ deliverableId, student }) => {
  const { _id: studentDeliverableId } = student
  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`

  return (
    <div>
      <Link to={path}>
        <p>Status: {student.status}</p>
        <ProfileInfo profile={student} />
        <p>{student.preferredName}</p>
        <p>{student.lastName}</p>
      </Link>

      External link:
      <ExternalUrls student={student} />

    </div>
  )
}

export default StudentDeliverableRow 
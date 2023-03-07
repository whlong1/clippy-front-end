import { Link } from "react-router-dom"

// Components
import GroupSelect from "./GroupSelect"
import ExternalUrls from "./ExternalUrls"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentDeliverableRow = ({ deliverableId, student, handleSquad }) => {
  const { _id: studentDeliverableId } = student
  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`

  return (
    <div className="row">

      <ProfileInfo profile={student} />
      <GroupSelect student={student} handleSquad={handleSquad} />

      <p>Status: {student.status}</p>

      External link:
      <ExternalUrls student={student} />

      <Link to={path}>View</Link>
    </div>
  )
}

export default StudentDeliverableRow 
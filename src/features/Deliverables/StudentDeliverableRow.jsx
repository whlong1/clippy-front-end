import { Link } from "react-router-dom"

// Components
import GroupSelect from "./GroupSelect"
import ExternalUrls from "./ExternalUrls"
import StatusIndicator from "./StatusIndicator"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentDeliverableRow = ({ deliverableId, student, handleSquad }) => {
  const { _id: studentDeliverableId } = student
  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`

  return (
    <div>
      <StatusIndicator status={student.status} />
      <GroupSelect student={student} handleSquad={handleSquad} />
      <ProfileInfo profile={student} />
      <ExternalUrls student={student} />
      <Link to={path}>View</Link>
    </div>
  )
}

export default StudentDeliverableRow 
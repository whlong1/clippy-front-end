import { Link } from "react-router-dom"

// Components
import GroupSelect from "./GroupSelect"
import ExternalUrls from "../components/ExternalUrls/ExternalUrls"
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo"
import StatusIndicator from "../../../components/StatusIndicator/StatusIndicator"

const StudentDeliverableRow = ({ deliverableId, student, handleSquad }) => {
  const { _id: studentDeliverableId, hasStudentWithdrawn } = student
  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`

  const studentDeliverableStatus = hasStudentWithdrawn && student.status === 'missing'
    ? 'W'
    : student.status


  return (
    <div className="row">
      <StatusIndicator status={studentDeliverableStatus} />
      <GroupSelect student={student} handleSquad={handleSquad} />
      <ProfileInfo profile={student} />
      <ExternalUrls student={student} />
      <Link style={{ fontSize: '14px' }} to={path}>View</Link>
    </div>
  )
}

export default StudentDeliverableRow 
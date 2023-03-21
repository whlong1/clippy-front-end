// Components
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"
import StatusIndicator from "../../components/StatusIndicator/StatusIndicator"

const StudentStatusRow = ({ student }) => {
  return (
    <div className="row">
      <StatusIndicator status={student.status} />
      <ProfileInfo profile={student} />
    </div>
  )
}

export default StudentStatusRow
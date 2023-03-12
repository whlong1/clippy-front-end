// Components
import StatusIcon from "./StatusIcon/StatusIcon"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentStatusRow = ({ student }) => {
  // Add lookup table for status icons
  return (
    <div className="row">
      {/* <p>{student.status}</p> */}
      <StatusIcon status={student.status} />
      <ProfileInfo profile={student} />
    </div>
  )
}

export default StudentStatusRow
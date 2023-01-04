import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentStatusRow = ({ student }) => {
  // Add lookup table for status icons
  return (
    <div>
      <p>Status: {student.status}</p>
      <ProfileInfo profile={student} />
    </div>
  )
}

export default StudentStatusRow
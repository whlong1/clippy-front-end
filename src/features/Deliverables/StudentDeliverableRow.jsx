import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentDeliverableRow = ({ student }) => {
  // Add lookup table for status icons
  return (
    <div>
      <p>Status: {student.status}</p>
      <ProfileInfo profile={student} />
      <p>{student.preferredName}</p>
      <p>{student.lastName}</p>
    </div>
  )
}

export default StudentDeliverableRow 
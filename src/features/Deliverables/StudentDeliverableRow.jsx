import { Link } from "react-router-dom"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentDeliverableRow = ({ deliverableId, student }) => {
  const { _id: studentDeliverableId } = student
  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`

  // console.log(student)
  return (
    <Link to={path}>
      <p>Status: {student.status}</p>
      <ProfileInfo profile={student} />
      <p>{student.preferredName}</p>
      <p>{student.lastName}</p>
    </Link>
  )
}

export default StudentDeliverableRow 
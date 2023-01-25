import { Link } from "react-router-dom"

// Components
import GroupSelect from "./GroupSelect"
import ExternalUrls from "./ExternalUrls"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

const StudentDeliverableRow = ({ deliverableId, student }) => {
  const { _id: studentDeliverableId } = student
  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`

  console.log(student)

  return (
    <div className="row">

      <ProfileInfo profile={student} />
      <GroupSelect />

      <Link to={path}>
        <p>Status: {student.status}</p>
        <p>{student.preferredName}</p>
        <p>{student.lastName}</p>
      </Link>

      External link:
      <ExternalUrls student={student} />

    </div>
  )
}

export default StudentDeliverableRow 
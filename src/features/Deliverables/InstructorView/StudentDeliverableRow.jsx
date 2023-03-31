import { useState } from "react"
import { Link } from "react-router-dom"

// Components
import GroupSelect from "./GroupSelect"
import CopyRowPopup from "../components/CopyRowPopup/CopyRowPopup"
import ExternalUrls from "../components/ExternalUrls/ExternalUrls"
import ProfileInfo from "../../../components/ProfileInfo/ProfileInfo"
import StatusIndicator from "../../../components/StatusIndicator/StatusIndicator"

const StudentDeliverableRow = ({ deliverableId, student, handleSquad }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { _id: studentDeliverableId, isWithdrawn } = student

  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`
  const studentDeliverableStatus = isWithdrawn ? 'W' : student.status

  const btnStyle = {
    margin: 0,
    border: 'none',
    background: 'none',
    letterSpacing: '2px',
  }

  return (
    <div className="row">
      <CopyRowPopup student={student} isOpen={isOpen} setIsOpen={setIsOpen} />
      <StatusIndicator status={studentDeliverableStatus} />
      <GroupSelect student={student} handleSquad={handleSquad} />
      <Link style={{ fontSize: '14px' }} to={path}>
        <ProfileInfo profile={student} />
      </Link>
      <ExternalUrls student={student} />
      <button style={btnStyle} onClick={() => setIsOpen(true)}>
        •••
      </button>
    </div>
  )
}

export default StudentDeliverableRow 
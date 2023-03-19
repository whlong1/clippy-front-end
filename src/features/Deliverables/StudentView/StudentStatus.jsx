// Assets
import { ReactComponent as PendingAuditIcon } from '../../../assets/icons/status/pending.svg'

const StudentStatus = ({ status }) => {

  const formattedStatus = status === 'pendingAudit'
    ? 'Pending Audit'
    : status[0].toUpperCase() + status.slice(1)

  return (
    <div className="subheader">
      <h3>
        <PendingAuditIcon fill="#FFFF" />
        Status
      </h3>
      <p style={{ marginTop: '2px' }}>{formattedStatus}</p>
    </div>
  )
}

export default StudentStatus

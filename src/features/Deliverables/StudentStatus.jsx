// Assets
import pendingAudit from '../../assets/icons/status/pending.svg'

const StudentStatus = ({ status }) => {
  
  const formattedStatus = status === 'pendingAudit'
    ? 'Pending Audit'
    : status[0].toUpperCase() + status.slice(1)

  return (
    <div className="subheader">
      <h3>
        <img src={pendingAudit} alt="status" />
        Status
      </h3>
      <p>{formattedStatus}</p>
    </div>
  )
}

export default StudentStatus

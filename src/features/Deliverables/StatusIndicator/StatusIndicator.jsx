import './StatusIndicator.css'

// Assets
import missing from '../../../assets/icons/status/missing.svg'
import assigned from '../../../assets/icons/status/assigned.svg'
import complete from '../../../assets/icons/status/complete.svg'
import pendingAudit from '../../../assets/icons/status/pending.svg'
import incomplete from '../../../assets/icons/status/incomplete.svg'

const StatusIndicator = ({ status }) => {
  const lookup = {
    missing,
    assigned,
    complete,
    incomplete,
    pendingAudit,
  }

  // Add style lookup object

  return (
    <div className="status" >
      <img src={lookup[status]} alt="deliverable status" />
    </div>
  )
}

export default StatusIndicator
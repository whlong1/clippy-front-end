import './StatusIndicator.css'

// Assets
import missing from '../../assets/icons/status/missing.svg'
import assigned from '../../assets/icons/status/assigned.svg'
import complete from '../../assets/icons/status/complete.svg'
import pendingAudit from '../../assets/icons/status/pending.svg'
import incomplete from '../../assets/icons/status/incomplete.svg'

import late from '../../assets/icons/attendance/late.svg'
import absent from '../../assets/icons/attendance/absent.svg'
import closed from '../../assets/icons/attendance/closed.svg'
import present from '../../assets/icons/attendance/present.svg'
import holiday from '../../assets/icons/attendance/holiday.svg'
import exception from '../../assets/icons/attendance/exception.svg'
import withdrawn from '../../assets/icons/attendance/withdrawn.svg'

const StatusIndicator = ({ status }) => {
  const lookup = {
    // Deliverable
    missing,
    assigned,
    complete,
    incomplete,
    pendingAudit,

    // Attendance
    L: late,
    A: absent,
    SC: closed,
    P: present,
    H: holiday,
    W: withdrawn,
    EC: exception,
  }

  // Add style lookup object

  return (
    <div className="status" >
      <img src={lookup[status]} alt="status" />
    </div>
  )
}

export default StatusIndicator
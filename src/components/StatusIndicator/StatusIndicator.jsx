import './StatusIndicator.css'

// Assets
import { ReactComponent as MissingIcon } from '../../assets/icons/status/missing.svg'
import { ReactComponent as CompleteIcon } from '../../assets/icons/status/complete.svg'
import { ReactComponent as AssignedIcon } from '../../assets/icons/status/assigned.svg'
import { ReactComponent as PendingAuditIcon } from '../../assets/icons/status/pending.svg'
import { ReactComponent as IncompleteIcon } from '../../assets/icons/status/incomplete.svg'

import { ReactComponent as LateIcon } from '../../assets/icons/attendance/late.svg'
import { ReactComponent as AbsentIcon } from '../../assets/icons/attendance/absent.svg'
import { ReactComponent as ClosedIcon } from '../../assets/icons/attendance/closed.svg'
import { ReactComponent as PresentIcon } from '../../assets/icons/attendance/present.svg'
import { ReactComponent as HolidayIcon } from '../../assets/icons/attendance/holiday.svg'
import { ReactComponent as ExceptionIcon } from '../../assets/icons/attendance/exception.svg'
import { ReactComponent as WithdrawnIcon } from '../../assets/icons/attendance/withdrawn.svg'

const StatusIndicator = ({ status }) => {
  const lookup = {
    // Deliverable:
    missing: <div><MissingIcon fill="#DB4C4C" /></div>, // Red
    assigned: <div><AssignedIcon fill="#888888" /></div>, // Grey
    complete: <div><CompleteIcon fill="#70C760" /></div>, // Green
    incomplete: <div><IncompleteIcon fill="#FFB158" /></div>, // Orange
    pendingAudit: <div><PendingAuditIcon fill="#5B8FD8" /></div>, // Blue

    // Attendance:
    L: <div><LateIcon fill="#FFB158" /></div>, // Orange
    A: <div><AbsentIcon fill="#DB4C4C" /></div>, // Red
    SC: <div><ClosedIcon fill="#5B8FD8" /></div>, // Blue
    P: <div><PresentIcon fill="#70C760" /></div>, // Green
    H: <div><HolidayIcon fill="#5B8FD8" /></div>, // Blue
    W: <div><WithdrawnIcon fill="#888888" /></div>, // Grey
    EC: <div><ExceptionIcon fill="#5B8FD8" /></div>, // Blue
  }

  return (
    <div className="status" >
      {lookup[status]}
    </div>
  )
}

export default StatusIndicator
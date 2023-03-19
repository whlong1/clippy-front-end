import './StatusIndicator.css'

// Assets
import { ReactComponent as CompleteIcon } from '../../assets/icons/status/complete.svg'
import { ReactComponent as MissingIcon } from '../../assets/icons/status/missing.svg'
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
  console.log(status)

  const lookup = {
    // Deliverable:
    missing: <div><MissingIcon fill="#DB4C4C" width="400px" /></div>,
    assigned: <div><AssignedIcon fill="#5B8FD8" width="400px" /></div>,
    complete: <div><CompleteIcon fill="#70C760" width="400px" /></div>,
    incomplete: <div><IncompleteIcon fill="#FEE635" width="400px" /></div>,
    pendingAudit: <div><PendingAuditIcon fill="#5E5E5E" width="400px" /></div>,

    // Attendance:
    L: <div><LateIcon fill="#FEE635" width="400px" /></div>,
    A: <div><AbsentIcon fill="#DB4C4C" width="400px" /></div>,
    SC: <div><ClosedIcon fill="#5B8FD8" width="400px" /></div>,
    P: <div><PresentIcon fill="#70C760" width="400px" /></div>,
    H: <div><HolidayIcon fill="#5B8FD8" width="400px" /></div>,
    W: <div><WithdrawnIcon fill="#5E5E5E" width="400px" /></div>,
    EC: <div><ExceptionIcon fill="#5B8FD8" width="400px" /></div>,
  }

  const ikea = [
    { value: '#DB4C4C', label: 'red' },
    { value: '#FFA036', label: 'orange' },
    { value: '#FEE635', label: 'yellow' },
    { value: '#70C760', label: 'green' },
    { value: '#5B8FD8', label: 'blue' },
    { value: '#B790CA', label: 'purple' },
    { value: '#FFA5C0', label: 'pink' },
    { value: '#5E5E5E', label: 'black' },
  ]

  return (
    <div className="status" >
      {lookup[status]}
    </div>
  )
}

export default StatusIndicator
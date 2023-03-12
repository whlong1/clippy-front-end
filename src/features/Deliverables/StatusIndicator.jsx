import missing from '../../assets/icons/status/missing.svg'
import assigned from '../../assets/icons/status/assigned.svg'
import complete from '../../assets/icons/status/complete.svg'
import pendingAudit from '../../assets/icons/status/pending.svg'
import incomplete from '../../assets/icons/status/incomplete.svg'

const StatusIndicator = ({ status }) => {
  console.log(status)

  const lookup = {
    missing,
    assigned,
    complete,
    incomplete,
    pendingAudit,
  }

  return (
    <img src={lookup[status]} alt="" />
  )
}

export default StatusIndicator
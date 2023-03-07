const StatusIndicator = ({status}) => {
  return (
    <input type="checkbox" checked={status} readOnly />
  )
}

export default StatusIndicator
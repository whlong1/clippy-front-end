import { Link } from "react-router-dom"

const AttendanceList = (props) => {
  const { attendance } = props
  return (
    attendance.map((a) => (
      <Link key={a._id} to={`/attendance/${a._id}`}>
        <p>{a.date}</p>
      </Link>
    ))
  )
}

export default AttendanceList
import { Link } from "react-router-dom"

const AttendanceList = ({attendance}) => {
  return (
    attendance.map((a) => (
      <Link key={a._id} to={`/attendance/${a._id}`}>
        <p>{a.date}</p>
      </Link>
    ))
  )
}

export default AttendanceList
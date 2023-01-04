import { Link } from "react-router-dom"

const AttendanceList = (props) => {
  const { attendance } = props

  // if (!attendance.length) return <h1>Loading</h1>


  return (
    attendance?.map((a) => (
      <Link key={a._id} to={`/attendance/${a._id}`}>
        <p>{a.date}</p>
      </Link>
    ))
  )
}

export default AttendanceList
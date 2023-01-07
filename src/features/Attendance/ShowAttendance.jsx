import { useParams, useNavigate, Link } from 'react-router-dom'

// Components
import StudentStatusRow from './StudentStatusRow'

// Hooks
import { useShowAttendance } from '../../hooks/useShowAttendance'
import { useAttendanceManager } from '../../hooks/useAttendanceManager'

const ShowAttendance = ({ user, cohortId }) => {
  const navigate = useNavigate()
  const { attendanceId } = useParams()
  const mutation = useAttendanceManager(cohortId)
  const { attendance, status } = useShowAttendance(attendanceId)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  const handleDelete = () => {
    mutation.mutate({ type: 'remove', payload: { attendanceId } })
    navigate('/attendance')
  }

  return (
    <section>
      <h1>Attendance Details</h1>

      <p>
        Taken by:
        {attendance.takenBy}
      </p>

      <p>
        Time:
        {attendance.time}
      </p>

      <p>
        Notes:
        {attendance.notes}
      </p>

      {user.isAdmin &&
        <Link to={`/attendance/${attendanceId}/edit`}>
          <button>Edit Attendance</button>
        </Link>
      }

      <button onClick={handleDelete}>Delete</button>

      {attendance.students.map((student) => (
        <StudentStatusRow key={student._id} student={student} />
      ))}
    </section>
  )
}

export default ShowAttendance
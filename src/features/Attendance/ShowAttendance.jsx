import { useParams, useNavigate, Navigate } from 'react-router-dom'

// Components
import StudentStatusRow from './StudentStatusRow'
import ContentStatus from '../../components/ContentStatus/ContentStatus'

// Hooks
import { useShowAttendance } from '../../hooks/useShowAttendance'
import { useAttendanceManager } from '../../hooks/useAttendanceManager'

const ShowAttendance = ({ user, cohortId }) => {
  const navigate = useNavigate()
  const { attendanceId } = useParams()
  const mutation = useAttendanceManager(cohortId)
  const { attendance, status } = useShowAttendance(attendanceId)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />
  if (attendance.cohort !== cohortId) return <Navigate to="/attendance" />

  // ==== Move to helper ====
  const options = {
    hour12: true,
    month: 'short',
    day: 'numeric',
    weekday: 'long',
    year: 'numeric',
  }
  const time = new Date(attendance.date).getTime()
  const timeDifference = new Date().getTimezoneOffset() * 60000
  const date = new Date(time + timeDifference)
  const formattedDate = date.toLocaleString("en-us", options)
  // ====                 ====

  const handleRedirect = () => navigate(`/attendance/${attendanceId}/edit`)

  const handleDelete = () => {
    mutation.mutate({ type: 'remove', payload: { attendanceId } })
    navigate('/attendance')
  }

  return (
    <section>
      <header className='header'>

        <section>
          <h1>{formattedDate} {attendance.time}</h1>
          {user.isAdmin && <button onClick={handleDelete}>Delete</button>}
          {user.isAdmin && <button onClick={handleRedirect}>Edit</button>}
        </section>

        <section>
          <div>
            <h3>Taken By</h3>
            <p>{attendance.takenBy.slice(0, 20)}</p>
          </div>
        </section>
      </header>

      {attendance.students.map((student) => (
        <StudentStatusRow key={student._id} student={student} />
      ))}
    </section>
  )
}

export default ShowAttendance
import { useState } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'

// Components
import Popup from '../../layouts/Popup'
import AttendanceHeader from './AttendanceHeader'
import StudentStatusRow from './StudentStatusRow'
import ContentStatus from '../../components/ContentStatus/ContentStatus'
import DeleteConfirmation from '../../components/DeleteConfirmation/DeleteConfirmation'

// Hooks
import { useShowAttendance } from '../../hooks/useShowAttendance'
import { useAttendanceManager } from '../../hooks/useAttendanceManager'

const ShowAttendance = ({ user, cohortId }) => {
  const navigate = useNavigate()
  const { attendanceId } = useParams()
  const [isOpen, setIsOpen] = useState(false)
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
    <section style={{ position: 'relative' }}>
      <Popup isOpen={isOpen}>
        <DeleteConfirmation
          setIsOpen={setIsOpen}
          title="Delete Attendance"
          handleDelete={handleDelete}
        />
      </Popup>

      <AttendanceHeader
        user={user}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        attendance={attendance}
        formattedDate={formattedDate}
        handleRedirect={handleRedirect}
      />
      
      {attendance.students.map((student) => (
        <StudentStatusRow key={student._id} student={student} />
      ))}
    </section>
  )
}

export default ShowAttendance
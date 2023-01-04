import { useParams } from 'react-router-dom'

// Hooks
import { useAttendanceDetails } from '../../hooks/useAttendanceDetails'

const AttendanceDetails = (props) => {
  // const { user, cohortId } = props
  const { attendanceId } = useParams()
  const { attendanceDetails, status } = useAttendanceDetails(attendanceId)

  console.log(attendanceDetails)

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading') return <h1>Loading...</h1>

  return (
    <section>
      Details
    </section>
  )
}

export default AttendanceDetails
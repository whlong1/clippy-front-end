import { useParams } from 'react-router-dom'

// Hooks
import { useAttendanceDetails } from '../../hooks/useAttendanceDetails'

const AttendanceDetails = (props) => {
  // const { user, cohortId } = props
  const { attendanceId } = useParams()
  const { attendanceDetails, status } = useAttendanceDetails(attendanceId)

  console.log(attendanceDetails)

  return (
    <section>
      Details
    </section>
  )
}

export default AttendanceDetails
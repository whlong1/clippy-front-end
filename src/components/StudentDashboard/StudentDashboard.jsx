import "./StudentDashboard.css"

// Hooks
import { useIndexStudentAttendance } from "../../hooks/useIndexStudentAttendance"
import { useIndexStudentDeliverables } from "../../hooks/useIndexStudentDeliverables"

const StudentDashboard = ({ cohortId, profile }) => {
  const { attendance, status: attendanceStatus } = useIndexStudentAttendance(cohortId, profile._id)
  const { studentDeliverables, status: deliverableStatus } = useIndexStudentDeliverables(cohortId, profile._id)

  return (
    <div className="studentDashboard">

    </div>
  )
}

export default StudentDashboard
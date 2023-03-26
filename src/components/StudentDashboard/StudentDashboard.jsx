import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import "./StudentDashboard.css"

// Components
import { Doughnut } from 'react-chartjs-2'
import ContentStatus from "../ContentStatus/ContentStatus"


// Hooks
import { useIndexStudentAttendance } from "../../hooks/useIndexStudentAttendance"
import { useIndexStudentDeliverables } from "../../hooks/useIndexStudentDeliverables"

const StudentDashboard = ({ cohortId, profile }) => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const { attendance, status: attendanceStatus } = useIndexStudentAttendance(cohortId, profile._id)
  const { studentDeliverables, status: deliverableStatus } = useIndexStudentDeliverables(cohortId, profile._id)

  if (attendanceStatus === 'error') return <ContentStatus status={attendanceStatus} />
  if (attendanceStatus === 'loading') return <ContentStatus status={attendanceStatus} />
  // if (deliverableStatus === 'error') return <ContentStatus status={deliverableStatus} />
  // if (deliverableStatus === 'loading') return <ContentStatus status={deliverableStatus} />

  console.log('a', attendance)

  // enum: ['assigned', 'complete', 'incomplete', 'missing', 'pendingAudit'],
  // Move attendance and deliverables into separate components
  // display completion rate inside circle


  return (
    <section className="studentDashboard">
      {/* <Doughnut
        height="160"
        width="220"
        data={data} options={options} plugins={[percentageText]}
      /> */}
    </section>
  )
}

export default StudentDashboard
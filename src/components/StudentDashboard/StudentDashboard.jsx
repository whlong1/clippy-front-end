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
  if (deliverableStatus === 'error') return <ContentStatus status={deliverableStatus} />
  if (deliverableStatus === 'loading') return <ContentStatus status={deliverableStatus} />

  console.log('a', attendance)
  console.log('d', studentDeliverables)

  // enum: ['assigned', 'complete', 'incomplete', 'missing', 'pendingAudit'],

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "left"
      },
    },
  }

  return (
    <section className="studentDashboard">
      <Doughnut data={data} options={options} />
    </section>
  )
}

export default StudentDashboard
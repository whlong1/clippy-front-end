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
  // Move attendance and deliverables into separate components
  // display completion rate inside circle

  const missing = studentDeliverables.filter((d) => d.status === 'missing').length
  const complete = studentDeliverables.filter((d) => d.status === 'complete').length
  const incomplete = studentDeliverables.filter((d) => d.status === 'incomplete').length
  const pending = studentDeliverables.filter((d) => d.status === 'pendingAudit' || d.status === 'assigned').length

  const percentComplete = (complete / studentDeliverables.length * 100).toFixed()

  const labels = [
    `Missing ${missing}`,
    `Pending ${pending}`,
    `Complete ${complete}`,
    `Incomplete ${incomplete}`,
  ]

  const data = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: [missing, pending, incomplete, complete],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
        ],
        borderWidth: 1,
        cutout: '90%',
      },
    ],
  }

  const test = {
    id: 'textCenter',
    beforeDatasetDraw(chart) {
      const { ctx } = chart
      ctx.save()
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = 'bolder 20px sans-serif'
      ctx.fillText(`${percentComplete}%`, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
  }

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
        }
      },

    },
  }

  return (
    <section className="studentDashboard">
      <Doughnut
        height="160"
        width="190"

        data={data} options={options} plugins={[test]} />
    </section>
  )
}

export default StudentDashboard
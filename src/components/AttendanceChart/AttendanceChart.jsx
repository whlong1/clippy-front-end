import "./AttendanceChart.css"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Hooks
import { useIndexStudentAttendance } from "../../hooks/useIndexStudentAttendance"

// Components
import { Doughnut } from 'react-chartjs-2'
import ContentStatus from "../ContentStatus/ContentStatus"

const AttendanceChart = ({ cohortId, profile }) => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const { attendance, status: status } = useIndexStudentAttendance(cohortId, profile._id)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const chartOptions = {
    layout: {},
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  }

  // const attendanceData = [
  //   {
  //     label: 'Missing:',
  //     borderColor: 'rgba(219, 76, 76, 0.6)',
  //     backgroundColor: 'rgba(219, 76, 76, 0.15)',
  //     data: studentDeliverables.filter((d) => d.status === 'missing').length,
  //   },
  //   {
  //     label: 'Pending:',
  //     borderColor: 'rgba(91, 143, 216, .6)',
  //     backgroundColor: 'rgba(91, 143, 216, .15)',
  //     data: studentDeliverables.filter((d) => d.status === 'pendingAudit' || d.status === 'assigned').length,
  //   },
  //   {
  //     label: 'Complete:',
  //     borderColor: 'rgba(112, 199, 96, .6)',
  //     backgroundColor: 'rgba(112, 199, 96, .15)',
  //     data: studentDeliverables.filter((d) => d.status === 'complete').length,
  //   },
  //   {
  //     label: 'Incomplete:',
  //     borderColor: 'rgba(255, 177, 88, 0.6)',
  //     backgroundColor: 'rgba(255, 177, 88, 0.15)',
  //     data: studentDeliverables.filter((d) => d.status === 'incomplete').length,
  //   },
  // ]

  // const chartData = {
  //   labels: deliverableData.map((d) => `${d.label} ${d.data}`),
  //   datasets: [
  //     {
  //       cutout: '90%',
  //       borderWidth: 1,
  //       label: 'Deliverables',
  //       data: deliverableData.map((d) => d.data),
  //       borderColor: deliverableData.map((d) => d.borderColor),
  //       backgroundColor: deliverableData.map((d) => d.backgroundColor),
  //     },
  //   ],
  // }

  // const complete = deliverableData[2].data
  // const total = studentDeliverables.length
  // const percentageText = {
  //   id: 'textCenter',
  //   beforeDatasetDraw(chart) {
  //     const { ctx } = chart
  //     ctx.save()
  //     ctx.fillStyle = 'white'
  //     ctx.textAlign = 'center'
  //     ctx.textBaseline = 'middle'
  //     ctx.font = 'bolder 20px sans-serif'
  //     ctx.fillText(
  //       `${(complete / total * 100).toFixed()}%`,
  //       chart.getDatasetMeta(0).data[0].x,
  //       chart.getDatasetMeta(0).data[0].y,
  //     )
  //   }
  // }

  return (
    <section className="chartContainer">
      <header>
        <h2>Attendance</h2>
      </header>

      <div className="chartAndLegend">
        <div className="legend">
          {/* {deliverableData.map((d) => (
            <p>
              <div
                style={{
                  border: `1px solid ${d.borderColor}`,
                  backgroundColor: d.backgroundColor,
                }}
              />
              {d.label} {d.data}
            </p>
          ))} */}
        </div>
        <div className="chart">
          {/* <Doughnut
            data={chartData}
            options={chartOptions}
            plugins={[percentageText]}
          /> */}
        </div>
      </div>

    </section>
  )
}

export default AttendanceChart
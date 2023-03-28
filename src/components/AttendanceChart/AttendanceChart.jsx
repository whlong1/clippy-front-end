import "./AttendanceChart.css"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Hooks
import { useIndexStudentAttendance } from "../../hooks/useIndexStudentAttendance"

// Components
import { Doughnut } from 'react-chartjs-2'
import ContentStatus from "../ContentStatus/ContentStatus"

const AttendanceChart = ({ cohortId, profile }) => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const { attendance, status } = useIndexStudentAttendance(cohortId, profile._id)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const chartOptions = {
    layout: {},
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  }

  const attendanceData = [
    {
      label: 'Absent:',
      borderColor: 'rgba(134, 65, 83, .85)',
      backgroundColor: 'rgba(134, 65, 83, .25)',
      data: attendance.filter((a) => a.students[0].status === 'A').length,
    },
    {
      label: 'Exception:',
      borderColor: 'rgba(85, 130, 188, .85)',
      backgroundColor: 'rgba(85, 130, 188, .25)',
      data: attendance.filter((a) => a.students[0].status === 'EC').length,
    },
    {
      label: 'Present:',
      borderColor: 'rgba(101, 156, 119, .85)',
      backgroundColor: 'rgba(101, 156, 119, .25)',
      data: attendance.filter((a) => a.students[0].status === 'P').length,
    },
    {
      label: 'Late:',
      borderColor: 'rgba(162, 139, 96, .85)',
      backgroundColor: 'rgba(162, 139, 96, .25)',
      data: attendance.filter((a) => a.students[0].status === 'L').length,
    },
  ]

  const chartData = {
    labels: attendanceData.map((a) => `${a.label} ${a.data}`),
    datasets: [
      {
        cutout: '90%',
        borderWidth: 1,
        label: 'Deliverables',
        data: attendanceData.map((a) => a.data),
        borderColor: attendanceData.map((a) => a.borderColor),
        backgroundColor: attendanceData.map((a) => a.backgroundColor),
      },
    ],
  }

  const total = attendance.length
  const present = attendanceData[2].data
  const fillText = total ? `${(present / total * 100).toFixed()}%` : ''

  const percentageText = {
    id: 'textCenter',
    beforeDatasetDraw(chart) {
      const { ctx } = chart
      ctx.save()
      ctx.fillStyle = 'white'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.font = 'bolder 20px sans-serif'
      ctx.fillText(
        fillText,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      )
    }
  }

  return (
    <section className="chartContainer">
      <header>
        <h2>Attendance</h2>
      </header>

      <div className="chartAndLegend">
        <div className="legend">
          {attendanceData.map((a) => (
            <p key={a.label}>
              <span
                style={{
                  border: `1.25px solid ${a.borderColor}`,
                  backgroundColor: a.backgroundColor,
                }}
              />
              {a.label} {a.data}
            </p>
          ))}
        </div>
        <div className="chart">
          <Doughnut
            data={chartData}
            options={chartOptions}
            plugins={[percentageText]}
          />
        </div>
      </div>

    </section>
  )
}

export default AttendanceChart
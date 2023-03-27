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
      borderColor: 'rgba(219, 76, 76, 0.6)',
      backgroundColor: 'rgba(219, 76, 76, 0.15)',
      data: attendance.filter((a) => a.students[0].status === 'A').length,
    },
    {
      label: 'Exception:',
      borderColor: 'rgba(91, 143, 216, .6)',
      backgroundColor: 'rgba(91, 143, 216, .15)',
      data: attendance.filter((a) => a.students[0].status === 'EC').length,
    },
    {
      label: 'Present:',
      borderColor: 'rgba(112, 199, 96, .6)',
      backgroundColor: 'rgba(112, 199, 96, .15)',
      data: attendance.filter((a) => a.students[0].status === 'P').length,
    },
    {
      label: 'Late:',
      borderColor: 'rgba(255, 177, 88, 0.6)',
      backgroundColor: 'rgba(255, 177, 88, 0.15)',
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

  const present = attendanceData[2].data
  const total = attendance.length
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
        `${(present / total * 100).toFixed()}%`,
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
            <p>
              <span
                style={{
                  border: `1px solid ${a.borderColor}`,
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
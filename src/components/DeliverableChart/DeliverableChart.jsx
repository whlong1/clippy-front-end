import "./DeliverableChart.css"

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

// Hooks
import { useIndexStudentDeliverables } from "../../hooks/useIndexStudentDeliverables"

// Components
import { Doughnut } from 'react-chartjs-2'
import ContentStatus from "../ContentStatus/ContentStatus"

const DeliverableChart = ({ cohortId, profile }) => {
  ChartJS.register(ArcElement, Tooltip, Legend)
  const { studentDeliverables, status } = useIndexStudentDeliverables(cohortId, profile._id)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const chartOptions = {
    layout: {},
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  }

  const deliverableData = [
    {
      label: 'Missing:',
      borderColor: 'rgba(255, 99, 132, 1)',
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      data: studentDeliverables.filter((d) => d.status === 'missing').length,
    },
    {
      label: 'Pending:',
      borderColor: 'rgba(54, 162, 235, 1)',
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      data: studentDeliverables.filter((d) => d.status === 'pendingAudit' || d.status === 'assigned').length,
    },
    {
      label: 'Complete:',
      borderColor: 'rgba(75, 192, 192, 1)',
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      data: studentDeliverables.filter((d) => d.status === 'complete').length,
    },
    {
      label: 'Incomplete:',
      borderColor: 'rgba(255, 206, 86, 1)',
      backgroundColor: 'rgba(255, 206, 86, 0.2)',
      data: studentDeliverables.filter((d) => d.status === 'incomplete').length,
    },
  ]

  const chartData = {
    labels: deliverableData.map((d) => `${d.label} ${d.data}`),
    datasets: [
      {
        cutout: '90%',
        borderWidth: 1,
        label: 'Deliverables',
        data: deliverableData.map((d) => d.data),
        borderColor: deliverableData.map((d) => d.borderColor),
        backgroundColor: deliverableData.map((d) => d.backgroundColor),
      },
    ],
  }

  const complete = deliverableData[2].data
  const total = studentDeliverables.length
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
        `${(complete / total * 100).toFixed()}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      )
    }
  }

  return (
    <section className="chartContainer">
      <header>
        <h2>Deliverables</h2>
      </header>

      <div className="chartAndLegend">
        <div className="legend">
          {deliverableData.map((d) => (
            <p>
              <div style={{ border: `1px solid ${d.borderColor}` }} />
              {d.label} {d.data}
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

export default DeliverableChart
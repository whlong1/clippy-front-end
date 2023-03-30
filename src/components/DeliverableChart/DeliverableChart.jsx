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

  const filteredByCohort = studentDeliverables.length
    ? studentDeliverables.filter((sd) => sd.cohort === cohortId) : []

  const chartOptions = {
    layout: {},
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
  }

  const deliverableData = [
    {
      label: 'Missing:',
      borderColor: 'rgba(221, 33, 24, 1)',
      backgroundColor: 'rgba(196, 7, 6, .35)',
      data: filteredByCohort.filter((d) => d.status === 'missing').length,
    },
    {
      label: 'Pending:',
      borderColor: 'rgba(29, 128, 245, 1)',
      backgroundColor: 'rgba(3, 103, 224, .3)',
      data: filteredByCohort.filter((d) => d.status === 'pendingAudit' || d.status === 'assigned').length,
    },
    {
      label: 'Complete:',
      borderColor: 'rgba(0, 151, 20, 1)',
      backgroundColor: 'rgba(0, 113, 15, .35)',
      data: filteredByCohort.filter((d) => d.status === 'complete').length,
    },
    {
      label: 'Incomplete:',
      borderColor: 'rgba(233, 199, 0, 1)',
      backgroundColor: 'rgba(161, 126, 0, .35)',
      data: filteredByCohort.filter((d) => d.status === 'incomplete').length,
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

  const total = filteredByCohort.length
  const complete = deliverableData[2].data
  const fillText = total ? `${(complete / total * 100).toFixed()}%` : ''

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
        <h2>Deliverables</h2>
      </header>

      <div className="chartAndLegend">
        <div className="legend">
          {deliverableData.map((d) => (
            <p key={d.label}>
              <span
                style={{
                  border: `1.25px solid ${d.borderColor}`,
                  backgroundColor: d.backgroundColor,
                }}
              />
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
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

  const missing = studentDeliverables.filter((d) => d.status === 'missing').length
  const complete = studentDeliverables.filter((d) => d.status === 'complete').length
  const incomplete = studentDeliverables.filter((d) => d.status === 'incomplete').length
  const pending = studentDeliverables.filter((d) => d.status === 'pendingAudit' || d.status === 'assigned').length
  const percentComplete = (complete / studentDeliverables.length * 100).toFixed()

  const labels = [
    `Missing: ${missing}`,
    `Pending: ${pending}`,
    `Complete: ${complete}`,
    `Incomplete: ${incomplete}`,
  ]

  const chartOptions = {
    // responsive: false,
    // maintainAspectRatio: true,
    responsive: true,
    maintainAspectRatio: false,
    layout: {},
    plugins: {
      legend: {
        display: true,
        position: "left",
        labels: {
          boxWidth: 10,
          boxHeight: 10,
          padding: 18,
          paddingRight: 100,
          border: '1px solid red'
        }
      },
      legendDistance: {
        padding: 70
      },
    },
  }

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: '# of Votes',
        data: [missing, pending, complete, incomplete],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(255, 206, 86, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(255, 206, 86, 1)',
        ],
        borderWidth: 1,
        cutout: '90%',
      },
    ],
  }

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
        `${percentComplete}%`,
        chart.getDatasetMeta(0).data[0].x,
        chart.getDatasetMeta(0).data[0].y,
      )
    }
  }

  // Source: https://stackoverflow.com/a/68811704
  const legendDistance = {
    id: 'legendDistance',
    beforeInit(chart, args, opts) {
      const originalFit = chart.legend.fit
      chart.legend.fit = function fit() {
        originalFit.bind(chart.legend)()
        this.width += opts.padding || 0
      }
    }
  }

  return (
    <section className="chartContainer">
      <h2>Deliverables</h2>
      <div className="doughnut">
        <Doughnut
          data={chartData}
          options={chartOptions}
          plugins={[percentageText, legendDistance]}
        />
      </div>
    </section>
  )
}

export default DeliverableChart
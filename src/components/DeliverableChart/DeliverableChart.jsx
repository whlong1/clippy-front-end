// Data
import { chartData, chartOptions } from './data'

// Hooks
import { useIndexStudentDeliverables } from "../../hooks/useIndexStudentDeliverables"

const DeliverableChart = () => {
  const { studentDeliverables, status } = useIndexStudentDeliverables(cohortId, profile._id)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

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

  chartData.labels = labels
  chartData.datasets.data = [missing, pending, incomplete, complete]

  const percentageText = {
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

  return (
    <Doughnut
      width="220"
      height="160"
      data={chartData}
      options={chartOptions}
      plugins={[percentageText]}
    />
  )
}

export default DeliverableChart
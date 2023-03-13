// STUDENT ONLY
const CompletionTracker = ({ studentDeliverables }) => {
  const deliverableCount = studentDeliverables.length
  const completedCount = studentDeliverables.filter((d) => d.status === 'complete').length
  const percentComplete = (completedCount / deliverableCount) * 100

  return (
    <div>
      <h2>Completion Rate:</h2>
      <p style={{ marginLeft: 'auto' }}>{percentComplete}% Complete</p>
    </div>
  )
}

export default CompletionTracker
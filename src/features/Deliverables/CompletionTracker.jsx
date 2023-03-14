// STUDENT ONLY
const CompletionTracker = ({ studentDeliverables }) => {

  const getPercentComplete = () => {
    if (!studentDeliverables.length) return 0
    const deliverableCount = studentDeliverables.length
    const completedCount = studentDeliverables.filter((d) => d.status === 'complete').length
    return (completedCount / deliverableCount) * 100
  }

  return (
    <div>
      <h2>Completion Rate:</h2>
      <p style={{ marginLeft: 'auto' }}>
        {getPercentComplete()}% Complete
      </p>
    </div>
  )
}

export default CompletionTracker
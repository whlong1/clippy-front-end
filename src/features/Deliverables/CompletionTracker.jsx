const CompletionTracker = ({ studentDeliverables }) => {
  const deliverableCount = studentDeliverables.length
  const completedCount = studentDeliverables.filter((d) => d.status === 'complete').length
  const percentComplete = (completedCount / deliverableCount) * 100

  return (
    <div>
      <p>Completion rate:</p>
      {percentComplete}% Complete
    </div>
  )
}

export default CompletionTracker
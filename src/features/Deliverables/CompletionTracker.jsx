// STUDENT ONLY
const CompletionTracker = ({ studentDeliverables }) => {

  const getPercentComplete = () => {
    if (!studentDeliverables.length) return 0
    const deliverableCount = studentDeliverables.length
    const completedCount = studentDeliverables.filter((d) => d.status === 'complete').length
    return (completedCount / deliverableCount) * 100
  }

  return (
    <section>
      <header>
        <h2>Completion Rate</h2>
        <p style={{ margin: 0, marginLeft: 'auto' }}>
          {getPercentComplete()}%
        </p>
      </header>
    </section>
  )
}

export default CompletionTracker
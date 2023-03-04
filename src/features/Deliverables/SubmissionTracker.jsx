const SubmissionTracker = ({ deliverable }) => {
  const deliverableCount = deliverable.students.length
  const completedCount = deliverable.students.filter((s) => s.status !== 'assigned').length
  const percentComplete = (completedCount / deliverableCount) * 100
  
  return (
    <div>
      <h4>Completion rate:</h4>
      {percentComplete}% Submitted
    </div>
  )
}

export default SubmissionTracker

// Combine this component (instructor facing) with CompletionTracker (student facing)
const SubmissionTracker = ({ deliverable }) => {
  const deliverableCount = deliverable.students.length
  const completedCount = deliverable.students.filter((s) => s.status !== 'assigned').length
  const percentComplete = (completedCount / deliverableCount) * 100
  
  return (
    <div>
      <h3>Completion</h3>
      <p>{percentComplete}% Submitted</p>
    </div>
  )
}

export default SubmissionTracker

// Combine this component (instructor facing) with CompletionTracker (student facing)
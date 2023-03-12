// Assets
import completionIcon from '../../assets/icons/headers/completion.svg'

const SubmissionTracker = ({ deliverable }) => {
  const deliverableCount = deliverable.students.length
  const completedCount = deliverable.students.filter((s) => s.status !== 'assigned').length
  const percentComplete = (completedCount / deliverableCount) * 100

  return (
    <div>
      <h3>
        <img src={completionIcon} alt="completion circle" />
        Submitted
      </h3>
      <p style={{ marginTop: '2px' }}>{percentComplete}% Submitted</p>
    </div>
  )
}

export default SubmissionTracker
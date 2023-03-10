const StudentDeliverableStatus = ({ deliverable }) => {
  const status = deliverable.status[0].toUpperCase() + deliverable.status.slice(1)
  return (
    <div>
      <h3>Status</h3>
      <p>{status}</p>
    </div>
  )
}

export default StudentDeliverableStatus
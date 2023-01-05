const StudentSubmissionPanel = (props) => {
  return (
    <div>
      <label htmlFor="">Submission Link Example:</label>
      <input type="text" />

      <button>Submit Deliverable</button>
      <button>Update Deliverable</button>
      <button>Mark Feedback as Read</button>
    </div>
  )
}

export default StudentSubmissionPanel

// What should I name this component?
// Sometimes it is used to submit the urls
// it can also be used to update the link
// and it can be used to mark feedback as read
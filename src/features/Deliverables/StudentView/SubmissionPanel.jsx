import "./StudentView.css"

const SubmissionPanel = (props) => {
  const {
    cohortId,
    setIsOpen,
    submitDeliverable,
    studentDeliverable,
  } = props


  const submissionForm = (
    <div>
      {/* <input
        type="text"
        id="gitHubUrl"
        name="gitHubUrl"
        onChange={handleChange}
        disabled={!isFormActive}
        value={deliverableData.gitHubUrl || ''}
      /> */}
    </div>
  )

  return (
    <div className="confirmation">
      <header>
        <h1>Submit Materials</h1>
        <p>Text</p>
      </header>
      <section>
        <button onClick={submitDeliverable}>SUBMIT</button>
        <button onClick={() => setIsOpen((prev) => !prev)}>CANCEL</button>
      </section>
    </div>
  )
}

export default SubmissionPanel

{/* <span>
<h2>Submit Materials</h2>
{isFormActive
  ? <button onClick={submitDeliverable}>SUBMIT</button>
  : <button onClick={() => setIsFormActive(true)}>UPDATE</button>
}
</span> */}
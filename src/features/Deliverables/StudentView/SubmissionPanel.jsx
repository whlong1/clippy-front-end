import "./StudentView.css"

const SubmissionPanel = (props) => {
  const {
    cohortId,
    setIsOpen,
    submitDeliverable,
    studentDeliverable,
  } = props


  const requirements = {
    hasMiscUrl: { name: 'miscUrl', label: 'Misc URL' },
    hasGitHubUrl: { name: 'gitHubUrl', label: 'Github URL' },
    hasTrelloUrl: { name: 'trelloUrl', label: 'Trello Url' },
    hasDeploymentUrl: { name: 'deploymentUrl', label: 'Deployment URL' },
    hasCodeSandboxUrl: { name: 'codeSandboxUrl', label: 'Code Sandbox URL' },
  }
  console.log('sd', studentDeliverable)

  const activeRequirements = Object.entries(requirements)
    .filter((obj) => studentDeliverable[obj[0]])
    .map((obj) => obj[1])


  console.log('active', activeRequirements)

  const requirementInputs = (
    activeRequirements.map((r) => (
      <>
        <label htmlFor={r.name}>{r.label}</label>
        <input
          type="text"
          id={r.name}
          name={r.name}
          placeholder={`Please enter your ${r.label} here`}
        // onChange={handleChange}
        // value={deliverableData.gitHubUrl || ''}
        />
      </>
    ))
  )

  console.log(requirementInputs)

  return (
    <div className="confirmation">
      <header>
        <h1>Submit Materials</h1>
        <p>Text</p>
      </header>
      {requirementInputs}
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
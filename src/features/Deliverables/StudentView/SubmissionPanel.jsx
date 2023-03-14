import { useState } from "react"
import "./StudentView.css"

const SubmissionPanel = (props) => {
  const {
    setIsOpen,
    submitDeliverable,
    studentDeliverable,
  } = props

  const [deliverableData, setDeliverableData] = useState(studentDeliverable)

  const handleChange = ({ target }) => {
    setDeliverableData({ ...deliverableData, [target.name]: target.value })
  }

  const requirements = {
    hasMiscUrl: { name: 'miscUrl', label: 'Misc URL' },
    hasGitHubUrl: { name: 'gitHubUrl', label: 'Github URL' },
    hasTrelloUrl: { name: 'trelloUrl', label: 'Trello Url' },
    hasDeploymentUrl: { name: 'deploymentUrl', label: 'Deployment URL' },
    hasCodeSandboxUrl: { name: 'codeSandboxUrl', label: 'Code Sandbox URL' },
  }

  const activeRequirements = Object.entries(requirements)
    .filter((obj) => studentDeliverable[obj[0]]).map((obj) => obj[1])

  return (
    <div className="confirmation">
      <header>
        <h1>Submit Materials</h1>
        <p>Please include any required links below.</p>
      </header>
      {activeRequirements.map((r, idx) => (
        <div key={idx}>
          <label htmlFor={r.name}>{r.label}</label>
          <input
            type="text"
            id={r.name}
            name={r.name}
            onChange={handleChange}
            value={deliverableData[r.name] || ''}
            placeholder={`Please enter your ${r.label} here`}
          />
        </div>
      ))}
      <section>
        <button onClick={() => submitDeliverable(deliverableData)}>SUBMIT</button>
        <button onClick={() => setIsOpen((prev) => !prev)}>CANCEL</button>
      </section>
    </div>
  )
}

export default SubmissionPanel
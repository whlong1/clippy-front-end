import { useState } from "react"
import { formatDate } from './helpers/helpers'

const NewDeliverable = (props) => {
  const [deliverableData, setDeliverableData] = useState({
    name: '',
    dueDate: '',
    notionUrl: '',

    hasQuiz: false,
    hasMiscUrl: false,
    hasGitHubUrl: false,
    hasTrelloUrl: false,
    hasDeploymentUrl: false,
    hasCodeSandboxUrl: false,
  })


  const handleChange = ({ target }) => {
    setAttendanceData({ ...deliverableData, [target.name]: target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      ...deliverableData,
      cohort: '************',
      dueDate: formatDate(deliverableData.dueDate),
    }
    console.log('Deliverable Form Data:', formData)
    // ...
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input
        required
        id="name"
        type="text"
        onChange={handleChange}
        value={deliverableData.name}
      />

      <label htmlFor="dueDate">Due Date:</label>
      <input
        type="date"
        id="dueDate"
        name="dueDate"
        onChange={handleChange}
        value={deliverableData.dueDate}
      />

      <label htmlFor="notionUrl">Notion URL:</label>
      <input
        type="text"
        id="notionUrl"
        name="notionUrl"
        onChange={handleChange}
        value={deliverableData.notionUrl}
      />

      <h3>Deliverable URLs needed:</h3>

      <label htmlFor="hasQuiz">Quiz:</label>
      <input
        type="checkbox"
        id="hasQuiz"
        name="hasQuiz"
        onChange={handleChange}
        value={deliverableData.hasQuiz}
        checked={deliverableData.hasQuiz}
      />

      <label htmlFor="hasMiscUrl">Misc URL:</label>
      <input
        type="checkbox"
        id="hasMiscUrl"
        name="hasMiscUrl"
        onChange={handleChange}
        value={deliverableData.hasMiscUrl}
        checked={deliverableData.hasMiscUrl}
      />

      <label htmlFor="hasGitHubUrl">GitHub URL:</label>
      <input
        type="checkbox"
        id="hasGitHubUrl"
        name="hasGitHubUrl"
        onChange={handleChange}
        value={deliverableData.hasGitHubUrl}
        checked={deliverableData.hasGitHubUrl}
      />

      <label htmlFor="hasTrelloUrl">Trello URL:</label>
      <input
        type="checkbox"
        id="hasTrelloUrl"
        name="hasTrelloUrl"
        onChange={handleChange}
        value={deliverableData.hasTrelloUrl}
        checked={deliverableData.hasTrelloUrl}
      />

      <label htmlFor="hasDeploymentUrl">Deployment:</label>
      <input
        type="checkbox"
        id="hasDeploymentUrl"
        name="hasDeploymentUrl"
        onChange={handleChange}
        value={deliverableData.hasDeploymentUrl}
        checked={deliverableData.hasDeploymentUrl}
      />

      <label htmlFor="hasCodeSandboxUrl">CodeSandbox</label>
      <input
        type="checkbox"
        id="hasCodeSandboxUrl"
        name="hasCodeSandboxUrl"
        onChange={handleChange}
        value={deliverableData.hasCodeSandboxUrl}
        checked={deliverableData.hasCodeSandboxUrl}
      />

      <button type="submit">Create Deliverable</button>
    </form>
  )
}

export default NewDeliverable
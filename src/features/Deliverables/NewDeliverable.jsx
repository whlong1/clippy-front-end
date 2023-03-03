import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { formatDate } from './helpers/helpers'

// Hooks
import { useDeliverablesManager } from '../../hooks/useDeliverablesManager'

const NewDeliverable = ({ cohortId }) => {
  const navigate = useNavigate()
  const mutation = useDeliverablesManager(cohortId)

  const [deliverableData, setDeliverableData] = useState({
    name: '',
    dueDate: '',
    notionUrl: '',

    hasQuiz: '',
    hasMiscUrl: '',
    hasGitHubUrl: '',
    hasTrelloUrl: '',
    hasDeploymentUrl: '',
    hasCodeSandboxUrl: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const formData = {
      cohort: cohortId,
      ...deliverableData,
      dueDate: formatDate(deliverableData.dueDate),
    }

    mutation.mutate({ type: 'create', payload: formData })
    navigate('/deliverables')
  }

  const handleChange = ({ target }) => {
    if (target.type === 'checkbox') {
      setDeliverableData({ ...deliverableData, [target.name]: target.checked ? 'checked' : '' })
    } else {
      setDeliverableData({ ...deliverableData, [target.name]: target.value })
    }
  }

  return (
    <section>
      <h1>New Deliverable</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          required
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={deliverableData.name}
        />

        <label htmlFor="dueDate">Due Date:</label>
        <input
          required
          id="dueDate"
          name="dueDate"
          type="datetime-local"
          onChange={handleChange}
          value={deliverableData.dueDate}
        />

        <label htmlFor="notionUrl">Notion URL:</label>
        <input
          required
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
          checked={deliverableData.hasQuiz}
        />

        <label htmlFor="hasMiscUrl">Misc URL:</label>
        <input
          type="checkbox"
          id="hasMiscUrl"
          name="hasMiscUrl"
          onChange={handleChange}
          checked={deliverableData.hasMiscUrl}
        />

        <label htmlFor="hasGitHubUrl">GitHub URL:</label>
        <input
          type="checkbox"
          id="hasGitHubUrl"
          name="hasGitHubUrl"
          onChange={handleChange}
          checked={deliverableData.hasGitHubUrl}
        />

        <label htmlFor="hasTrelloUrl">Trello URL:</label>
        <input
          type="checkbox"
          id="hasTrelloUrl"
          name="hasTrelloUrl"
          onChange={handleChange}
          checked={deliverableData.hasTrelloUrl}
        />

        <label htmlFor="hasDeploymentUrl">Deployment:</label>
        <input
          type="checkbox"
          id="hasDeploymentUrl"
          name="hasDeploymentUrl"
          onChange={handleChange}
          checked={deliverableData.hasDeploymentUrl}
        />

        <label htmlFor="hasCodeSandboxUrl">CodeSandbox</label>
        <input
          type="checkbox"
          id="hasCodeSandboxUrl"
          name="hasCodeSandboxUrl"
          onChange={handleChange}
          checked={deliverableData.hasCodeSandboxUrl}
        />

        <button type="submit">Create Deliverable</button>
      </form>
    </section>
  )
}

export default NewDeliverable
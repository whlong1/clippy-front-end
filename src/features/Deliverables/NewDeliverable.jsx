import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getDefaultDate } from './helpers/helpers'

// Hooks
import { useDeliverablesManager } from '../../hooks/useDeliverablesManager'

const NewDeliverable = ({ cohortId }) => {
  const navigate = useNavigate()
  const mutation = useDeliverablesManager(cohortId)

  const [deliverableData, setDeliverableData] = useState({
    name: '',
    dueDate: getDefaultDate(),
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
      // Might need to adjust this after deployment:
      dueDate: deliverableData.dueDate
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
    <section className="formContainer">
      <h1>New Deliverable</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          required
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={deliverableData.name}
        />

        <label htmlFor="dueDate">Due Date</label>
        <input
          required
          id="dueDate"
          name="dueDate"
          type="datetime-local"
          timezone="US/Eastern"
          onChange={handleChange}
          value={deliverableData.dueDate}
        />

        <label htmlFor="notionUrl">Notion URL</label>
        <input
          required
          type="text"
          id="notionUrl"
          name="notionUrl"
          onChange={handleChange}
          value={deliverableData.notionUrl}
        />

        <h2>Deliverable Requirements</h2>

        <div>
          <input
            type="checkbox"
            id="hasQuiz"
            name="hasQuiz"
            onChange={handleChange}
            checked={deliverableData.hasQuiz}
          />
          <label htmlFor="hasQuiz">Quiz</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasMiscUrl"
            name="hasMiscUrl"
            onChange={handleChange}
            checked={deliverableData.hasMiscUrl}
          />
          <label htmlFor="hasMiscUrl">Misc URL</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasGitHubUrl"
            name="hasGitHubUrl"
            onChange={handleChange}
            checked={deliverableData.hasGitHubUrl}
          />
          <label htmlFor="hasGitHubUrl">GitHub URL</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasTrelloUrl"
            name="hasTrelloUrl"
            onChange={handleChange}
            checked={deliverableData.hasTrelloUrl}
          />
          <label htmlFor="hasTrelloUrl">Trello URL</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasDeploymentUrl"
            name="hasDeploymentUrl"
            onChange={handleChange}
            checked={deliverableData.hasDeploymentUrl}
          />
          <label htmlFor="hasDeploymentUrl">Deployment</label>
        </div>

        <div>
          <input
            type="checkbox"
            id="hasCodeSandboxUrl"
            name="hasCodeSandboxUrl"
            onChange={handleChange}
            checked={deliverableData.hasCodeSandboxUrl}
          />
          <label htmlFor="hasCodeSandboxUrl">CodeSandbox</label>
        </div>

        <button type="submit">Create Deliverable</button>
      </form>
    </section>
  )
}

export default NewDeliverable
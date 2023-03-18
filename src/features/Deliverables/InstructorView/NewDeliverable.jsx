import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { getDefaultDate } from '../helpers/helpers'

// Styles
import './styles/NewDeliverable.css'

// Hooks
import { useDeliverablesManager } from '../../../hooks/useDeliverablesManager'

// Components
import DeliverableFormInputs from "./DeliverableFormInputs"

const NewDeliverable = ({ cohortId }) => {
  const navigate = useNavigate()
  const mutation = useDeliverablesManager(cohortId)
  const [msg, setMsg] = useState('')
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

  const hasCheckboxValues = Object.values(deliverableData).some((v) => v === 'checked')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!hasCheckboxValues) {
      setMsg('Please select at least one requirement.')
    } else {
      const formData = {
        cohort: cohortId,
        ...deliverableData,
        // Might need to adjust this after deployment:
        dueDate: deliverableData.dueDate
      }
      mutation.mutate({ type: 'create', payload: formData })
      navigate('/deliverables')
    }
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
      <form onSubmit={handleSubmit} autoComplete="off">
        <header className="header">
          <h1>New Deliverable</h1>
          <button type="submit">SUBMIT</button>
        </header>
        <DeliverableFormInputs
          msg={msg}
          handleChange={handleChange}
          deliverableData={deliverableData}
        />

      </form>
    </section>
  )
}

export default NewDeliverable
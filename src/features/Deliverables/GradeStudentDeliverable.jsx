import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

// Components
import RequirementsList from "./RequirementsList"
import DeliverableStatusSelect from "./DeliverableStatusSelect"

// Hooks
import { useShowStudentDeliverable } from '../../hooks/useShowStudentDeliverable'
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"

const GradeStudentDeliverable = ({ cohortId }) => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)
  const mutation = useDeliverablesManager(cohortId)
  const { deliverableId, studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId)

  useEffect(() => {
    setFormData(studentDeliverable)
  }, [deliverableId, studentDeliverable])

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading' || !formData) return <h1>Loading...</h1>

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleGrade = () => {
    mutation.mutate({ type: 'grade', payload: { ...formData, gradedBy: "Hunter" } })
    navigate(`/deliverables/${deliverableId}`)
  }

  const { profile: { preferredName, lastName } } = formData
  const title = `Grade ${formData.name} for ${preferredName} ${lastName}`

  return (
    <section>
      <h1>{title}</h1>
      <p>{formData.dueDate}</p>

      <p>URLS:</p>
      <RequirementsList deliverable={formData} />

      <textarea></textarea>
      <pre>Code Editor Placeholder</pre>

      <h3>Status: {formData.status}</h3>
      <DeliverableStatusSelect formData={formData} handleChange={handleChange} />

      <button onClick={handleGrade}>Submit Grade</button>
    </section>
  )
}

export default GradeStudentDeliverable
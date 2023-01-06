import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

// Components
import RequirementsList from "./RequirementsList"

// Hooks
import { useShowStudentDeliverable } from '../../hooks/useShowStudentDeliverable'
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"

const GradeStudentDeliverable = ({ cohortId }) => {
  const { studentDeliverableId } = useParams()
  const [formData, setFormData] = useState({})
  const mutation = useDeliverablesManager(cohortId)
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId)

  useEffect(() => {
    setFormData(studentDeliverable)
  }, [studentDeliverable])

  if (status === 'error') return <h1>Error</h1>
  if (status === 'loading' || !formData) return <h1>Loading...</h1>

  const { name, dueDate, profile: { preferredName, lastName } } = formData

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleGrade = () => {
    mutation.mutate({ type: 'grade', payload: { ...formData, gradedBy: "Hunter" } })
  }

  const studentName = `${preferredName} ${lastName}`
  const title = `Grade ${name} for ${studentName}`

  return (
    <section>
      <h1>{title}</h1>
      <p>{dueDate}</p>

      <p>URLS:</p>
      <RequirementsList deliverable={formData} />

      <textarea></textarea>
      <pre>Code Editor Placeholder</pre>

      <h3>
        Status: {formData.status}
      </h3>

      <select
        name="status"
        onChange={handleChange}
        defaultValue={formData.status}
      >
        <option value='assigned'>Assigned</option>
        <option value='pendingAudit'>Pending Audit</option>
        <option value='complete'>Complete</option>
        <option value='incomplete'>Incomplete</option>
        <option value='missing'>Missing</option>
      </select>

      <button onClick={handleGrade}>Submit Grade</button>
    </section>
  )
}

export default GradeStudentDeliverable
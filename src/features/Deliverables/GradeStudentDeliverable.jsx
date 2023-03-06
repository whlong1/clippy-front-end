import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

// Components
import DueDate from "./DueDate"
import StudentDeliverableHeader from "./StudentDeliverableHeader"
import CodeEditor from "./CodeEditor"
import RequirementsList from "./RequirementsList"
// import DeliverableHeader from "./DeliverableHeader"
import DeliverableStatusSelect from "./DeliverableStatusSelect"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

// Hooks
import { useDeliverablesManager } from "../../hooks/useDeliverablesManager"
import { useShowStudentDeliverable } from '../../hooks/useShowStudentDeliverable'

const GradeStudentDeliverable = (props) => {
  const { cohortId } = props
  const navigate = useNavigate()
  const [formData, setFormData] = useState(null)
  const mutation = useDeliverablesManager(cohortId)
  const { deliverableId, studentDeliverableId } = useParams()
  const { studentDeliverable, status } = useShowStudentDeliverable(studentDeliverableId, deliverableId)

  useEffect(() => {
    setFormData(studentDeliverable)
  }, [deliverableId, studentDeliverable])

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading' || !formData) return <ContentStatus status={status} />
  // if (studentDeliverable.profile.cohort !== cohortId) return <Navigate to='/deliverables' />

  console.log(studentDeliverable)

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleGrade = () => {
    mutation.mutate({
      type: 'grade',
      payload: { ...formData, gradedBy: props.profile.name }
    })
    navigate(`/deliverables/${deliverableId}`)
  }

  // Would be nice to have some clarity between 'profile' (student) and 'profile' (current user)
  const { profile: { preferredName, lastName } } = formData
  const title = `Grade ${formData.name} for ${preferredName} ${lastName}`

  return (
    <section>
      {/* <h1>{title}</h1> */}
      <StudentDeliverableHeader deliverable={studentDeliverable} />

      <CodeEditor
        formData={formData}
        setFormData={setFormData}
      />

      <h3>Status: {formData.status}</h3>
      <DeliverableStatusSelect formData={formData} handleChange={handleChange} />

      <button onClick={handleGrade}>Submit Grade</button>
    </section>
  )
}

export default GradeStudentDeliverable
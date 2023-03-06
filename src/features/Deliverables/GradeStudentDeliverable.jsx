import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"

// Components
import CodeEditor from "./CodeEditor"
import GradingNotes from "./GradingNotes"
import DeliverableStatusSelect from "./DeliverableStatusSelect"
import StudentDeliverableHeader from "./StudentDeliverableHeader"
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
      <StudentDeliverableHeader
        title={title}
        handleChange={handleChange}
        deliverable={studentDeliverable}
      />
      <GradingNotes
        handleChange={handleChange}
        gradingNotes={formData.gradingNotes}
      />
      <CodeEditor
        formData={formData}
        setFormData={setFormData}
      />
      <DeliverableStatusSelect formData={formData} handleChange={handleChange} />

      <button onClick={handleGrade}>Submit Grade</button>
    </section>
  )
}

export default GradeStudentDeliverable
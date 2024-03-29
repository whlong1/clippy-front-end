import { useState, useEffect } from "react"
import { useParams, useNavigate, Navigate } from "react-router-dom"

// Components
import CodeEditor from "../components/CodeEditor/CodeEditor"
import GradeDeliverableHeader from "./GradeDeliverableHeader"
import GradingNotes from "../components/GradingNotes/GradingNotes"
import ContentStatus from "../../../components/ContentStatus/ContentStatus"
import SubmisionAndFeedback from "../components/SubmissionAndFeedback/SubmissionAndFeedback"

// Hooks
import { useDeliverablesManager } from "../../../hooks/useDeliverablesManager"
import { useShowStudentDeliverable } from '../../../hooks/useShowStudentDeliverable'

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
  if (studentDeliverable.cohort !== cohortId) return <Navigate to='/deliverables' />

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  const handleGrade = () => {
    mutation.mutate({
      type: 'grade',
      payload: { ...formData, gradedBy: props.profile.firstName }
    })
    navigate(`/deliverables/${deliverableId}`)
  }

  return (
    <section className="studentDeliverable" style={{ position: 'relative' }}>
      <GradeDeliverableHeader
        formData={formData}
        handleGrade={handleGrade}
        handleChange={handleChange}
        title={`Grade ${formData.name}`}
        deliverable={studentDeliverable}
      />
      <SubmisionAndFeedback
        adminView={true}
        cohortId={cohortId}
        studentDeliverable={studentDeliverable}
      />
      <GradingNotes
        handleChange={handleChange}
        gradingNotes={formData.gradingNotes}
      />
      <CodeEditor
        formData={formData}
        instructorView={true}
        setFormData={setFormData}
      />
    </section>
  )
}

export default GradeStudentDeliverable
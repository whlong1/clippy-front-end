import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/StudentView.css'

// Helpers
import { getLocaleDateString } from '../helpers/helpers'

// Components
import MenuLayout from '../../../layouts/MenuLayout'
import CompletionTracker from './CompletionTracker'
import MenuStatus from '../../../components/MenuStatus/MenuStatus'
import ToggleArrow from '../../../components/ToggleArrow/ToggleArrow'
import StatusIndicator from '../../../components/StatusIndicator/StatusIndicator'
import { useIndexStudentDeliverables } from '../../../hooks/useIndexStudentDeliverables'

const StudentDeliverablesMenu = (props) => {
  const { cohortId, profile } = props
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false)
  const [isCompletedOpen, setIsCompletedOpen] = useState(false)
  const { studentDeliverables, status } = useIndexStudentDeliverables(cohortId, profile._id)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  const filteredByCohort = studentDeliverables.length
    ? studentDeliverables.filter((sd) => sd.cohort === cohortId) : []

  const newFeedback = filteredByCohort.length
    ? filteredByCohort.filter((sd) => sd.hasNewStatus) : []

  const sortDeliverables = (d) => d.sort((a, b) => (
    new Date(a.dueDate) - new Date(b.dueDate))
  )

  const upcomingDeliverables = sortDeliverables(
    filteredByCohort.length
      ? filteredByCohort.filter((sd) => sd.status !== 'complete')
      : []
  )

  const completedDeliverables = sortDeliverables(
    filteredByCohort.length
      ? filteredByCohort.filter((sd) => sd.status === 'complete')
      : []
  )

  return (
    <MenuLayout {...props}>
      <span>
        <h1>My Deliverables</h1>
      </span>

      <CompletionTracker studentDeliverables={filteredByCohort} />

      <section>
        <header>
          <h2>{upcomingDeliverables.length
            ? 'Assigned Deliverables'
            : 'No Deliverables Assigned'
          }</h2>
        </header>
        {upcomingDeliverables.map((sd) => (
          <Link className='sdRow' key={sd._id} to={`/deliverables/${sd._id}`}>
            <StatusIndicator status={sd.status} />
            <h2>{sd.name}</h2>
            <p>{getLocaleDateString(sd.dueDate)}</p>
          </Link>
        ))}
      </section>

      {!!completedDeliverables.length &&
        <section>
          <header onClick={() => setIsCompletedOpen(!isCompletedOpen)}>
            <h2>Completed Deliverables</h2>
            <ToggleArrow isOpen={isCompletedOpen} />
          </header>
          {isCompletedOpen && completedDeliverables.map((sd) => (
            <Link className='sdRow' key={sd._id} to={`/deliverables/${sd._id}`}>
              <StatusIndicator status={sd.status} />
              <h2>{sd.name}</h2>
              <p>{getLocaleDateString(sd.dueDate)}</p>
            </Link>
          ))}
        </section>
      }

      {!!newFeedback.length &&
        <section>
          <header onClick={() => setIsFeedbackOpen(!isFeedbackOpen)}>
            <h2>New Feedback</h2>
            <ToggleArrow isOpen={isFeedbackOpen} />
          </header>
          {isFeedbackOpen && newFeedback.map((sd) => (
            <Link className='sdRow' key={sd._id} to={`/deliverables/${sd._id}`}>
              <StatusIndicator status={sd.status} />
              <h2>{sd.name}</h2>
              <p>{getLocaleDateString(sd.dueDate)}</p>
            </Link>
          ))}
        </section>
      }

    </MenuLayout>
  )
}

export default StudentDeliverablesMenu
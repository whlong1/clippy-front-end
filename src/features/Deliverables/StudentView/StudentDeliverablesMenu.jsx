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
  const [isOpen, setIsOpen] = useState(false)
  const { studentDeliverables, status } = useIndexStudentDeliverables(cohortId, profile._id)

  if (status === 'error') return <MenuStatus {...props} status={status} />
  if (status === 'loading') return <MenuStatus {...props} status={status} />

  const newFeedback = studentDeliverables.length
    ? studentDeliverables.filter((sd) => sd.hasNewStatus) : []

  return (
    <MenuLayout {...props}>
      <span>
        <h1>My Deliverables</h1>
      </span>

      <CompletionTracker studentDeliverables={studentDeliverables} />

      <section>
        <header>
          <h2>{studentDeliverables.length ? 'Deliverables' : 'No Deliverables Assigned'}</h2>
        </header>
        {studentDeliverables.length && studentDeliverables.map((sd) => (
          <Link className='sdRow' key={sd._id} to={`/deliverables/${sd._id}`}>
            <StatusIndicator status={sd.status} />
            <h2>{sd.name}</h2>
            <p>{getLocaleDateString(sd.dueDate)}</p>
          </Link>
        ))}
      </section>

      {!!newFeedback.length &&
        <section>
          <header onClick={() => setIsOpen(!isOpen)}>
            <h2>New Feedback</h2>
            <ToggleArrow isOpen={isOpen}/>
          </header>
          {isOpen && newFeedback.map((sd) => (
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
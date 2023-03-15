import { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles/StudentView.css'

// Assets
import arrow from '../../../assets/icons/arrow.svg'
import downArrow from '../../../assets/icons/downArrow.svg'

// Helpers
import { getLocaleDateString } from '../helpers/helpers'

// Components
import MenuLayout from '../../../layouts/MenuLayout'
import CompletionTracker from '../CompletionTracker'
import MenuStatus from '../../../components/MenuStatus/MenuStatus'
import StatusIndicator from '../../../components/StatusIndicator/StatusIndicator'
import { useIndexStudentDeliverables } from '../../../hooks/useIndexStudentDeliverables'

const StudentDeliverablesMenu = (props) => {
  // Student DeliverablesMenu View
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
      {!studentDeliverables.length && <p>No Deliverables</p>}

      <section>
        <header>
          <h2>Deliverables</h2>
        </header>
        {studentDeliverables.length && studentDeliverables.map((sd) => (
          <Link className='sdRow' key={sd._id} to={`/deliverables/${sd._id}`}>
            <StatusIndicator status={sd.status} />
            <p>{sd.name}</p>
            <p>{getLocaleDateString(sd.dueDate)}</p>
          </Link>
        ))}
      </section>

      {!!newFeedback.length &&
        <section>
          <header>
            <h2>New Feedback</h2>
            <button onClick={() => setIsOpen(!isOpen)}>
              <img src={isOpen ? downArrow : arrow} alt="An arrow" />
            </button>
          </header>
          {isOpen && newFeedback.map((sd) => (
            <Link className='sdRow' key={sd._id} to={`/deliverables/${sd._id}`}>
              <StatusIndicator status={sd.status} />
              <p>{sd.name}</p>
              <p>{getLocaleDateString(sd.dueDate)}</p>
            </Link>
          ))}
        </section>
      }

    </MenuLayout>
  )
}

export default StudentDeliverablesMenu
import { useState } from "react"

// Hooks
import { useRoleManager } from "../../hooks/useRoleManager"
import { useIndexCohorts } from "../../hooks/useIndexCohorts"

// Components
import SelectRole from './SelectRole'
import Popup from "../../layouts/Popup"
import ContentStatus from "../../components/ContentStatus/ContentStatus"

const RolePanel = ({ person, cohortId }) => {
  const [isOpen, setIsOpen] = useState(false)
  const { cohorts, status } = useIndexCohorts()
  const mutation = useRoleManager(cohortId, person._id)

  if (status === 'error') return <ContentStatus status={status} />
  if (status === 'loading') return <ContentStatus status={status} />

  const handleMutate = (changeRoleData) => {
    setIsOpen(!isOpen)
    mutation.mutate({ type: 'change', payload: changeRoleData })
  }

  const denialData = { person, formerRole: "waitlist", newRole: null }
  const approvalData = { person, formerRole: "waitlist", newRole: "students" }
  const removalData = { person, formerRole: person.role, newRole: "inactive" }

  const isWaitlisted = cohorts.find((c) => c._id === cohortId).waitlist.includes(person._id)

  return (
    <section>

      {isWaitlisted &&
        <button onClick={() => mutation.mutate({ type: 'approve', payload: approvalData })}>
          ADMIT TO COHORT
        </button>
      }

      {isWaitlisted &&
        <button onClick={() => mutation.mutate({ type: 'deny', payload: denialData })}>
          DENY STUDENT
        </button>
      }

      {!isWaitlisted && person.role !== 'inactive' &&
        <button onClick={() => mutation.mutate({ type: 'remove', payload: removalData })}>
          REMOVE FROM COHORT
        </button>
      }

      {!isWaitlisted && !isOpen &&
        <button onClick={() => setIsOpen(!isOpen)}>
          CHANGE ROLE
        </button>
      }

      <Popup key={person._id} isOpen={isOpen}>
        <SelectRole
          person={person}
          setIsOpen={setIsOpen}
          handleMutate={handleMutate}
        />
      </Popup>


    </section>
  )
}

export default RolePanel
import { useState } from "react"

// Hooks
import { useRoleManager } from "../../hooks/useRoleManager"

// Components
import SelectRole from './SelectRole'
import Popup from "../../layouts/Popup"

const RolePanel = ({ person, cohortId }) => {
  const { isApprovalPending } = person
  const [isOpen, setIsOpen] = useState(false)
  const mutation = useRoleManager(cohortId, person._id)

  const handleMutate = (changeRoleData) => {
    setIsOpen(!isOpen)
    mutation.mutate({ type: 'change', payload: changeRoleData })
  }

  const denialData = { person, formerRole: "waitlist", newRole: null }
  const approvalData = { person, formerRole: "waitlist", newRole: "students" }
  const removalData = { person, formerRole: person.role, newRole: "inactive" }

  return (
    <section>

      {isApprovalPending &&
        <button onClick={() => mutation.mutate({ type: 'deny', payload: denialData })}>
          DENY STUDENT
        </button>
      }

      {isApprovalPending &&
        <button onClick={() => mutation.mutate({ type: 'approve', payload: approvalData })}>
          ADMIT TO COHORT
        </button>
      }

      {person.role !== 'inactive' &&
        <button onClick={() => mutation.mutate({ type: 'remove', payload: removalData })}>
          REMOVE FROM COHORT
        </button>
      }

      {!isApprovalPending && !isOpen &&
        <button onClick={() => setIsOpen(!isOpen)}>
          CHANGE ROLE
        </button>
      }

      <Popup isOpen={isOpen}>
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
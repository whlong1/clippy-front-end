import { useState } from "react"

// Hooks
import { useRoleManager } from "../../hooks/useRoleManager"

// Components
import SelectRole from './SelectRole'

const RolePanel = ({ person, cohortId }) => {
  const { isApprovalPending } = person
  const [isOpen, setIsOpen] = useState(false)
  const mutation = useRoleManager(cohortId, person._id)

  const denialData = { person, formerRole: "waitlist", newRole: null }
  const removalData = { person, formerRole: "students", newRole: "inactive" }
  const approvalData = { person, formerRole: "waitlist", newRole: "students" }

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

      {!isApprovalPending && isOpen &&
        <SelectRole
          setIsOpen={setIsOpen}
          person={person}
          mutation={mutation}
        />
      }

    </section>
  )
}

export default RolePanel
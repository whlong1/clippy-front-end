// Hooks
import { useRoleManager } from "../../hooks/useRoleManager"

// Components
import SelectRole from './SelectRole'

const RolePanel = ({ person, cohortId }) => {
  const { isApprovalPending } = person
  const mutation = useRoleManager(cohortId, person._id)

  const denialData = { person, formerRole: "waitlist", newRole: null }
  const removalData = { person, formerRole: "students", newRole: "inactive" }
  const approvalData = { person, formerRole: "waitlist", newRole: "students" }

  return (
    <>
      <button>Edit Profile</button>
      <h2>Manage Roles</h2>

      {isApprovalPending &&
        <button onClick={() => mutation.mutate({ type: 'deny', payload: denialData })}>
          Deny Student
        </button>
      }

      {isApprovalPending &&
        <button onClick={() => mutation.mutate({ type: 'approve', payload: approvalData })}>
          Admit to Cohort
        </button>
      }

      {person.role !== 'inactive' &&
        <button onClick={() => mutation.mutate({ type: 'remove', payload: removalData })}>
          Remove from Cohort
        </button>
      }

      {!isApprovalPending &&
        <SelectRole mutation={mutation} person={person} />
      }

    </>
  )
}

export default RolePanel
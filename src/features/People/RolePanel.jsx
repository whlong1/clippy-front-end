import { useState } from "react"

// Hooks
import { useRoleManager } from "../../hooks/useRoleManager"
import { useIndexCohorts } from "../../hooks/useIndexCohorts"

// Components
import ContentStatus from "../../components/ContentStatus/ContentStatus"
import ChangeRolePopup from "./components/ChangeRolePopup/ChangeRolePopup"

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
  const isWaitlisted = cohorts.find((c) => c._id === cohortId).waitlist.includes(person._id)

  return (
    <section className="rolePanel">

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

      {!isWaitlisted &&
        <button onClick={() => setIsOpen(!isOpen)}>
          CHANGE ROLE
        </button>
      }

      <ChangeRolePopup
        person={person}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleMutate={handleMutate}
      />
      
    </section>
  )
}

export default RolePanel
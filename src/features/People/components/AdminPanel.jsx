import * as cohortService from '../../../services/cohortService'

const AdminPanel = (props) => {
  // Need { formerRole: "waitlist", newRole: "ias" }

  const handleApproveProfile = async () => {

  }

  return (
    <>
      <button>Edit Profile</button>
      <button onClick={handleApproveProfile}>Admit to Cohort</button>
      <button>Remove from Cohort</button>
      <button>Change Role</button>
    </>
  )
}

export default AdminPanel
import { useState } from "react"
import "./MyProfile.css"

// Components
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import StudentDashboard from "../../components/StudentDashboard/StudentDashboard"
import EditProfilePopup from "../../components/EditProfilePopup/EditProfilePopup"
import SelectCohortPopup from "../../components/SelectCohortPopup/SelectCohortPopup"
import ContactInformation from "../../components/ContactInformation/ContactInformation"

const MyProfile = (props) => {
  const { user, cohortId, profile, setProfile } = props
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  return (
    <main className="myProfile" style={{ position: 'relative' }}>
      <SelectCohortPopup
        profile={profile}
        isOpen={isJoinOpen}
        setProfile={setProfile}
        setIsOpen={setIsJoinOpen}
        notifyAdmin={user.isAdmin}
      />
      <EditProfilePopup
        profile={profile}
        isOpen={isEditOpen}
        setProfile={setProfile}
        setIsOpen={setIsEditOpen}
      />
      <header className="header">
        <section>
          <h1>Profile</h1>
          <button onClick={() => setIsEditOpen(true)}>EDIT PROFILE</button>
          {(user.isAdmin || profile.isWithdrawn) && <button onClick={() => setIsJoinOpen(true)}>
            CHANGE COHORT
          </button>}
        </section>
      </header>
      <section>
        <ProfilePicture gitHubUserName={profile.gitHubUserName} size="120px" />
        <ContactInformation person={profile} />
      </section>
      <StudentDashboard
        profile={profile}
        cohortId={cohortId}
      />
    </main>
  )
}

export default MyProfile 
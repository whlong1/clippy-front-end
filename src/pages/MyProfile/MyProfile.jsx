import { useState } from "react"
import "./MyProfile.css"

// Components
import ProfileSection from "../../components/ProfileSection/ProfileSection"
import EditProfilePopup from "../../components/EditProfilePopup/EditProfilePopup"
import SelectCohortPopup from "../../components/SelectCohortPopup/SelectCohortPopup"
import StudentChartColumn from "../../components/StudentChartColumn/StudentChartColumn"
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
      
      <section className={!user.isAdmin ? "profileContent" : "adminView"} >
        <ProfileSection person={profile} />
        <ContactInformation person={profile} />
        <StudentChartColumn user={user} profile={profile} cohortId={cohortId} />
      </section>
    </main>
  )
}

export default MyProfile 
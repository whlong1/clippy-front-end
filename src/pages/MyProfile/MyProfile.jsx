import { useState } from "react"
import "./MyProfile.css"

// Components
import ProfileSection from "../../components/ProfileSection/ProfileSection"
import AttendanceChart from "../../components/AttendanceChart/AttendanceChart"
import DeliverableChart from "../../components/DeliverableChart/DeliverableChart"
import EditProfilePopup from "../../components/EditProfilePopup/EditProfilePopup"
import SelectCohortPopup from "../../components/SelectCohortPopup/SelectCohortPopup"
import ContactInformation from "../../components/ContactInformation/ContactInformation"

const MyProfile = (props) => {
  const { user, cohortId, profile, setProfile } = props
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  console.log(profile)

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


      <section className="profileContent">
        <ProfileSection person={profile} />
        <ContactInformation person={profile} />

        {!user.isAdmin &&
          <div className="chartColumn">
            <DeliverableChart
              profile={profile}
              cohortId={cohortId}
            />

            <AttendanceChart
              profile={profile}
              cohortId={cohortId}
            />
          </div>
        }
      </section>

    </main>
  )
}

export default MyProfile 
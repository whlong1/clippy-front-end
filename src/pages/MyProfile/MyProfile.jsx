import { useState } from "react"
import "./MyProfile.css"

// Components
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
import SetCohortPopup from "../../components/SelectCohortPopup/SelectCohortPopup"
import EditProfilePopup from "../../components/EditProfilePopup/EditProfilePopup"
import ContactInformation from "../../components/ContactInformation/ContactInformation"

const MyProfile = (props) => {
  const { profile, setProfile } = props
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const featureReady = false

  return (
    <main className="myProfile" style={{ position: 'relative' }}>
      <SetCohortPopup
        profile={profile}
        isJoinOpen={isJoinOpen}
        setProfile={setProfile}
        setIsJoinOpen={setIsJoinOpen}
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

          {featureReady && props.user.isAdmin &&
            <button onClick={() => setIsJoinOpen(true)}>CHANGE DEFAULT COHORT</button>
          }
        </section>
      </header>

      <section>
        <ProfilePicture gitHubUserName={profile.gitHubUserName} size="120px" />
        <ContactInformation person={profile} />
      </section>

    </main>
  )
}

export default MyProfile 
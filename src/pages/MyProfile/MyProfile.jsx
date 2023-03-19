import { useState } from "react"
import "./MyProfile.css"

// Components
import Popup from "../../layouts/Popup"
import SetCohortPopup from "../../components/SetCohortPopup/SetCohortPopup"
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"
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
      <Popup isOpen={isEditOpen}>
        <div className="confirmation">
          <header>
            <h1>Edit Profile</h1>
          </header>
          <section>
            <ProfileForm profile={profile} setProfile={setProfile} />
            <button onClick={() => setIsEditOpen(false)}>CANCEL</button>
          </section>
        </div>
      </Popup>

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
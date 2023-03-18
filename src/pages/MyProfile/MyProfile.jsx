import { useState } from "react"
import "./MyProfile.css"

// Components
import Popup from "../../layouts/Popup"
import JoinCohort from "../../components/JoinCohort/JoinCohort"
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"

const MyProfile = (props) => {
  const { profile, setProfile } = props
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isJoinOpen, setIsJoinOpen] = useState(false)

  const getFullName = () => {
    if (!profile.firstName || !profile.lastName) return profile.email
    const last = profile.lastName[0].toUpperCase() + profile.lastName.slice(1)
    const first = profile.preferredName[0].toUpperCase() + profile.preferredName.slice(1)
    return first + " " + last
  }

  const myInfo = (
    <div>
      <h1>{getFullName()}</h1>
      {profile?.preferredPronouns}
      {profile?.email}
      {profile?.firstName}
      {profile?.gitHubUserName}
      {profile?.linkedInUserName}
      {profile?.codeWarsUserName}
    </div>
  )

  return (
    <main className="myProfile" style={{ position: 'relative' }}>

      <Popup isOpen={isJoinOpen}>
        <div className="confirmation">
          <header>
            <h1>Set Default Cohort</h1>
            <p>After joining, you will need to admit yourself to the cohort.</p>
            <p>Be sure to refresh your browser to update the default cohort selection.</p>
          </header>
          <JoinCohort
            profile={profile}
            setProfile={setProfile}
            setIsJoinOpen={setIsJoinOpen}
          />
          <button onClick={() => setIsJoinOpen(false)}>CANCEL</button>
        </div>
      </Popup>

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
          {props.user.isAdmin && <button onClick={() => setIsJoinOpen(true)}>CHANGE DEFAULT COHORT</button>}
        </section>
      </header>

      <section>
        <ProfilePicture gitHubUserName={profile.gitHubUserName} size="200px" />
        {myInfo}
      </section>

    </main>
  )
}

export default MyProfile 
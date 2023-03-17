import { useState } from "react"

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
    <>
      <h1>{getFullName()}</h1>
      {profile?.preferredPronouns}
      {profile?.email}
      {profile?.firstName}
      {profile?.gitHubUserName}
      {profile?.linkedInUserName}
      {profile?.codeWarsUserName}
    </>
  )

  return (
    <main className="page" style={{ position: 'relative' }}>

      <Popup isOpen={isJoinOpen}>
        <>
          <h1>Set Default Cohort</h1>
          <p>After joining, you will need to admit yourself to the cohort.</p>
          <p>Be sure to refresh your browser to update the default cohort selection.</p>
          <button onClick={() => setIsJoinOpen(false)}>CANCEL</button>
          <JoinCohort
            profile={profile}
            setProfile={setProfile}
            setIsJoinOpen={setIsJoinOpen}
          />
        </>
      </Popup>

      <Popup isOpen={isEditOpen}>
        <>
          <h1>Edit Profile</h1>
          <button onClick={() => setIsEditOpen(false)}>CANCEL</button>
          <ProfileForm profile={profile} setProfile={setProfile} />
        </>
      </Popup>

      <h1>My Profile</h1>
      <ProfilePicture gitHubUserName={profile.gitHubUserName} size="100px" />
      {myInfo}

      <button onClick={() => setIsEditOpen(true)}>EDIT PROFILE</button>
      {props.user.isAdmin && <button onClick={() => setIsJoinOpen(true)}>CHANGE DEFAULT COHORT</button>}

    </main>
  )
}

export default MyProfile 
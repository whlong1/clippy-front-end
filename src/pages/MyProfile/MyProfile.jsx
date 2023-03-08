import { useState } from "react"

// Components
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import ProfilePicture from "../../components/ProfilePicture/ProfilePicture"

const MyProfile = (props) => {
  const { profile, setProfile } = props
  const [isOpen, setIsOpen] = useState(false)

  const last = profile.lastName[0].toUpperCase() + profile.lastName.slice(1)
  const first = profile.preferredName[0].toUpperCase() + profile.preferredName.slice(1)
  const fullName = first + " " + last

  const myInfo = (
    <>
      <h1>{fullName}</h1>
      {profile.preferredPronouns}
      {profile.email}
      {profile.firstName}
      {profile.gitHubUserName}
      {profile.linkedInUserName}
      {profile.codeWarsUserName}
    </>
  )

  return (
    <main className="page">
      <h1>My Profile</h1>
      <ProfilePicture gitHubUserName={profile.gitHubUserName} size="100px" />
      {myInfo}

      <button onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? 'Edit Profile' : 'Cancel'}
      </button>

      {isOpen &&
        <ProfileForm profile={profile} setProfile={setProfile} />
      }

    </main>
  )
}

export default MyProfile 
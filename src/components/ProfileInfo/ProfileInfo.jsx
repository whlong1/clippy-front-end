import "./ProfileInfo.css"

// Components
import ProfilePicture from "../ProfilePicture/ProfilePicture"

const ProfileInfo = ({ profile }) => {
  const { preferredName, lastName, gitHubUserName } = profile

  const getFullName = () => {
    // Check for users who have no finished onboarding:
    if (!profile.lastName) return profile.email

    const last = lastName[0].toUpperCase() + lastName.slice(1)
    const first = preferredName[0].toUpperCase() + preferredName.slice(1)

    return first + " " + last
  }

  return (
    // <div style={{ flexDirection: 'row', alignItems: 'center' }}>
    <div className="profileInfo">
      <ProfilePicture gitHubUserName={gitHubUserName} size='24px' />
      <p>{getFullName()}</p>
    </div>
  )
}

export default ProfileInfo
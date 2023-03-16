import ProfilePicture from "../ProfilePicture/ProfilePicture"

const ProfileInfo = ({ profile }) => {
  const { preferredName, lastName, gitHubUserName } = profile

  const getFullName = () => {
    // if (!profile.isProfileComplete) return profile.email
    const last = lastName[0].toUpperCase() + lastName.slice(1)
    const first = preferredName[0].toUpperCase() + preferredName.slice(1)
    return first + " " + last
  }

  return (
    <div style={{ flexDirection: 'row', alignItems: 'center' }}>
      <ProfilePicture gitHubUserName={gitHubUserName} size='24px' />
      <p>{getFullName()}</p>
    </div>
  )
}

export default ProfileInfo
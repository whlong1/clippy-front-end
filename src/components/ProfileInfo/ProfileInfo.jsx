import ProfilePicture from "../ProfilePicture/ProfilePicture"

const ProfileInfo = ({ profile }) => {
  const { preferredName, lastName, gitHubUserName } = profile
  
  const last = lastName[0].toUpperCase() + lastName.slice(1)
  const first = preferredName[0].toUpperCase() + preferredName.slice(1)
  const fullName = first + " " + last

  return (
    <div>
      <ProfilePicture gitHubUserName={gitHubUserName} size='24px' />
      <p>{fullName}</p>
    </div>
  )
}

export default ProfileInfo
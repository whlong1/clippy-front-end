import ProfilePicture from "../ProfilePicture/ProfilePicture"

const ProfileInfo = ({ profile }) => {
  const { preferredName, firstName, lastName, gitHubUserName } = profile
  const userName = `${preferredName ? preferredName : firstName} ${lastName}`

  return (
    <div>
      <ProfilePicture gitHubUserName={gitHubUserName} size='20px' />
      <p>{userName}</p>
    </div>
  )
}

export default ProfileInfo
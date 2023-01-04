import ProfilePicture from "../ProfilePicture/ProfilePicture"

const ProfileInfo = ({ profile }) => {
  const { preferredName, firstName, lastName, gitHubUserName } = profile
  const userName = `${preferredName ? preferredName : firstName} ${lastName}`

  return (
    <div>
      <p>{userName}</p>
      <ProfilePicture gitHubUserName={gitHubUserName} />
    </div>
  )
}

export default ProfileInfo
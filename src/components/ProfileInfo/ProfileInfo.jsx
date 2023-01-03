const ProfileInfo = ({ profile }) => {
  const { preferredName, firstName, lastName, gitHubUserName } = profile
  const userName = `${preferredName ? preferredName : firstName} ${lastName}`

  return (
    <div>
      <p>{userName}</p>
      <img
        alt="github-profile"
        style={{ width: '20px' }}
        src={`https://github.com/${gitHubUserName}.png`}
      />
    </div>
  )
}

export default ProfileInfo
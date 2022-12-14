const ProfilePicture = ({ gitHubUserName, size }) => {
  const defaultImg = 'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200'
  const pictureURL = gitHubUserName ? `https://github.com/${gitHubUserName}.png` : defaultImg

  return (
    <img
      alt="github-profile"
      style={{ width: size }}
      src={pictureURL}
    />
  )
}

export default ProfilePicture
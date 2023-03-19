import { useState } from 'react'
import defaultPhoto from '../../assets/icons/defaultPhoto.svg'

const ProfilePicture = ({ gitHubUserName, size }) => {
  const [urlError, setUrlError] = useState(false)

  return (
    <img
      alt="github-profile"
      onError={() => setUrlError(true)}
      style={{ width: size, height: size }}
      src={urlError ? defaultPhoto : `https://github.com/${gitHubUserName}.png`}
    />
  )
}

export default ProfilePicture
import { useState } from 'react'
import defaultPhoto from '../../assets/defaultPhoto.svg'

const ProfilePicture = ({ gitHubUserName, size }) => {
  const [isLoading, setIsLoading] = useState(true)

  const [photo, setPhoto] = useState(
    gitHubUserName ? `https://github.com/${gitHubUserName}.png` : defaultPhoto
  )

  return (
    <img
      alt="github-profile"
      style={{ width: size }}
      onLoad={() => setIsLoading(false)}
      onError={() => setPhoto(defaultPhoto)}
      src={isLoading ? defaultPhoto : photo}
    />
  )
}

export default ProfilePicture
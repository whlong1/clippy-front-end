import { useState, useEffect } from 'react'
import defaultPhoto from '../../assets/icons/defaultPhoto.svg'

const ProfilePicture = ({ gitHubUserName, size }) => {
  const [photo, setPhoto] = useState(defaultPhoto)

  useEffect(() => {
    if (gitHubUserName) setPhoto(`https://github.com/${gitHubUserName}.png`)
  }, [gitHubUserName])

  return (
    <img
      src={photo}
      alt="github-profile"
      onError={() => setPhoto(defaultPhoto)}
      style={{ width: size, height: size }}
    />
  )
}

export default ProfilePicture
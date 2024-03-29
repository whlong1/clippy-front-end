import { useState } from 'react'
import * as profileService from '../../services/profileService'

const ProfileForm = ({ profile, setProfile, setIsOpen }) => {
  const [formData, setFormData] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    preferredName: profile.preferredName,
    preferredPronouns: profile.preferredPronouns,
    gitHubUserName: profile.gitHubUserName,
    linkedInUserName: profile.linkedInUserName,
    codeWarsUserName: profile.codeWarsUserName,
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await profileService.updateProfile(formData)
    if (setIsOpen) setIsOpen(false)
    setProfile(res)
  }

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="firstName">First Name:</label>
      <input
        required
        type="text"
        id="firstName"
        name="firstName"
        placeholder="First Name"
        onChange={handleChange}
        value={formData.firstName || ''}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        required
        type="text"
        id="lastName"
        name="lastName"
        placeholder="Last Name"
        onChange={handleChange}
        value={formData.lastName || ''}
      />
      <label htmlFor="preferredName">Preferred First Name:</label>
      <input
        type="text"
        id="preferredName"
        name="preferredName"
        placeholder="Preferred First Name"
        onChange={handleChange}
        value={formData.preferredName || ''}
      />
      <label htmlFor="preferredPronouns">Pronouns:</label>
      <input
        required
        type="text"
        id="preferredPronouns"
        name="preferredPronouns"
        placeholder="Pronouns"
        onChange={handleChange}
        value={formData.preferredPronouns || ''}
      />
      <label htmlFor="gitHubUserName">GitHub User Name:</label>
      <input
        type="text"
        id="gitHubUserName"
        name="gitHubUserName"
        placeholder="GitHub User Name"
        onChange={handleChange}
        value={formData.gitHubUserName || ''}
      />
      <label htmlFor="linkedInUserName">LinkedIn User Name:</label>
      <input
        type="text"
        id="linkedInUserName"
        name="linkedInUserName"
        placeholder="LinkedIn User Name"
        onChange={handleChange}
        value={formData.linkedInUserName || ''}
      />
      <label htmlFor="codeWarsUserName">Code Wars User Name:</label>
      <input
        type="text"
        id="codeWarsUserName"
        name="codeWarsUserName"
        placeholder="Code Wars User Name"
        onChange={handleChange}
        value={formData.codeWarsUserName || ''}
      />
      <button type="submit">SUBMIT PROFILE</button>
    </form>

  )
}

export default ProfileForm
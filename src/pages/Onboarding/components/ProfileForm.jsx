import { useState } from 'react'

const ProfileForm = ({ btnText, handleSubmit }) => {
  const [formData, setFormData] = useState({})

  const handleChange = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value })
  }

  return (
    <form onSubmit={(e) => handleSubmit(e, formData)}>
      <label htmlFor="name">Name:</label>
      <input
        required
        type="text"
        id="name"
        name="name"
        onChange={handleChange}
        value={formData.name || ''}
      />
      <label htmlFor="firstName">First Name:</label>
      <input
        required
        type="text"
        id="firstName"
        name="firstName"
        onChange={handleChange}
        value={formData.firstName || ''}
      />
      <label htmlFor="lastName">Last Name:</label>
      <input
        required
        type="text"
        id="lastName"
        name="lastName"
        onChange={handleChange}
        value={formData.lastName || ''}
      />
      <label htmlFor="preferredName">Preferred Name:</label>
      <input
        type="text"
        id="preferredName"
        name="preferredName"
        onChange={handleChange}
        value={formData.preferredName || ''}
      />
      <label htmlFor="preferredPronouns">Preferred Pronouns:</label>
      <input
        type="text"
        id="preferredPronouns"
        name="preferredPronouns"
        onChange={handleChange}
        value={formData.preferredPronouns || ''}
      />
      <label htmlFor="gitHubUserName">GitHub User Name:</label>
      <input
        type="text"
        id="gitHubUserName"
        name="gitHubUserName"
        onChange={handleChange}
        value={formData.gitHubUserName || ''}
      />
      <label htmlFor="linkedInUserName">LinkedIn User Name:</label>
      <input
        type="text"
        id="linkedInUserName"
        name="linkedInUserName"
        onChange={handleChange}
        value={formData.linkedInUserName || ''}
      />
      <label htmlFor="codeWarsUserName">Code Wars User Name:</label>
      <input
        type="text"
        id="codeWarsUserName"
        name="codeWarsUserName"
        onChange={handleChange}
        value={formData.codeWarsUserName || ''}
      />
      <button type="submit">{btnText}</button>
    </form>

  )
}

export default ProfileForm
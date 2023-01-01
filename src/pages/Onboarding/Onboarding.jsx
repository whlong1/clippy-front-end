import { useNavigate } from "react-router-dom"

// Services
import * as profileService from '../../services/profileService'

// Components
import Form from "../../components/Form/Form"
import ProfileForm from "./components/ProfileForm"

const profileInputfields = {
  name: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  preferredName: {
    type: String
  },
  normalizedName: {
    type: String,
    lowercase: true
  },
  preferredPronouns: {
    type: String,
    lowercase: true
  },
  gitHubUserName: {
    type: String
  },
  linkedInUserName: {
    type: String
  },
  codeWarsUserName: {
    type: String
  },
  isBoolean: {
    type: Boolean,
    default: false
  },
  role: {
    type: Number,
    default: 0
  },
}

const Onboarding = (props) => {
  const navigate = useNavigate()

  const handleOnboarding = async () => {
    // Make request to update profile...
    const res = await profileService()
    console.log(res)
    props.setProfile({ isOnboarded: true })
    navigate('/')
  }

  return (
    <main>
      <h1>Onboarding</h1>
      <Form inputFields={profileInputfields} />
      {/* <ProfileForm/> */}

      <button onClick={handleOnboarding}>
        Complete Onboarding
      </button>

    </main>
  )
}

export default Onboarding
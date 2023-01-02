// import { useNavigate } from "react-router-dom"

// Services
import * as profileService from '../../services/profileService'

// Components
import ProfileForm from "./components/ProfileForm"

const Onboarding = (props) => {
  // const navigate = useNavigate()
  const { profile, setProfile } = props

  console.log('profile', props.profile)

  const handleOnboarding = async (e, formData) => {
    e.preventDefault()
    // Make request to update profile...
    const res = await profileService.updateProfile(formData)
    console.log(res)
    setProfile(res)
    // navigate('/')
  }

  return (
    <main>
      <h1>Onboarding</h1>

      {!profile?.isProfileComplete
        ? <ProfileForm btnText="Complete Onboarding" handleSubmit={handleOnboarding} />
        : <h1>Step 2</h1>
      }

    </main>
  )
}

export default Onboarding
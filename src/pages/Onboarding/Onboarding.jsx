import { useNavigate } from "react-router-dom"

// Services
import * as profileService from '../../services/profileService'

// Components
import ProfileForm from "./components/ProfileForm"

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
      <ProfileForm />
      <button onClick={handleOnboarding}>
        Complete Onboarding
      </button>

    </main>
  )
}

export default Onboarding
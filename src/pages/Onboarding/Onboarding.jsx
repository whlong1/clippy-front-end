// import { useNavigate } from "react-router-dom"

// Services
import * as profileService from '../../services/profileService'

// Components
import ProfileForm from "./components/ProfileForm"

const Onboarding = (props) => {
  // const navigate = useNavigate()
  const { profile, setProfile } = props
  const { isProfileComplete, isApprovalPending } = profile


  console.log('profile', props.profile)

  const handleOnboarding = async (e, formData) => {
    e.preventDefault()
    // Make request to update profile...
    const res = await profileService.updateProfile(formData)
    console.log(res)
    setProfile(res)
    // navigate('/')
  }


  // Profile form
  // isProfileComplete
  // Select cohort
  // isApprovalPending
  // Wait for an instructor message
  // isOnboarded

  // add isApprovalPending to profile
  // update appropriate cohort controller

  if (!isProfileComplete) {
    return <ProfileForm btnText="Complete Onboarding" handleSubmit={handleOnboarding} />
  }


  return (
    <main>
      <h1>Onboarding</h1>

   
    </main>
  )
}

export default Onboarding
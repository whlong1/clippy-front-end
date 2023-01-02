// Services
import * as profileService from '../../services/profileService'

// Components
import ProfileForm from "./components/ProfileForm"
import SelectCohort from './components/SelectCohort'

const Onboarding = (props) => {
  const { profile, setProfile } = props

  console.log('profile', props.profile)

  // Rename function:
  const handleOnboarding = async (e, formData) => {
    e.preventDefault()
    const res = await profileService.updateProfile(formData)
    console.log(res)
    setProfile(res)
  }

  // Onboarding Stages:

  // Step 1: Profile is incomplete. User completes profile.
  const stepOne = (
    profile && !profile.isProfileComplete &&
    <ProfileForm btnText="Complete Onboarding" handleSubmit={handleOnboarding} />
  )

  // Step 2: Profile has been completed. User selects cohort.
  const stepTwo = (
    profile && profile.isProfileComplete &&
    <SelectCohort />
  )

  // Step 3: Profile has been added to waitlist. User awaits approval. 
  const stepThree = (
    profile && profile.isApprovalPending &&
    <h1>Awaiting instructor approval.</h1>
  )

  return (
    <main>
      <h1>Onboarding</h1>
      <section>
        {stepOne}
        {stepTwo}
        {stepThree}
      </section>
    </main>
  )
}

export default Onboarding
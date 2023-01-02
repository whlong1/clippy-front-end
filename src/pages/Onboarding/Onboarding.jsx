// Services
import * as profileService from '../../services/profileService'

// Components
import ProfileForm from "./components/ProfileForm"
import SelectCohort from './components/SelectCohort'

const Onboarding = (props) => {
  const { profile, setProfile } = props
  console.log('profile', profile)

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
    profile?.isProfileComplete &&
    <SelectCohort />
  )

  // Step 3: Profile has been added to waitlist. User awaits approval. 
  const stepThree = (
    profile?.isApprovalPending &&
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

// Create cohorts in Postman
// Build out index cohorts service

// Build out addProfileToWaitlist service
// Rename existing onboarding functions 
// Render select cohort component
// Update cohort.approveProfile controller with isOnboarded

// MyProfile needs to be a component that can fit inside
// whatever Message component wrapper we use for step 3

// User has access to the site once an instructor has made them a student
// and isOnboarded is set to true.
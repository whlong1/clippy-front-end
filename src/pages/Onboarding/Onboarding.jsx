// Components
import ProfileForm from "./components/ProfileForm"
import SelectCohort from './components/SelectCohort'

const Onboarding = (props) => {
  const { profile, setProfile } = props
  console.log('profile', profile)

  const profileProps = { profile, setProfile }

  // Onboarding Stages:

  // Step 1: Profile is incomplete. User completes profile.
  const stepOne = (
    profile && !profile.isProfileComplete &&
    <ProfileForm {...profileProps} />
  )

  // Step 2: Profile has been completed. User selects cohort.
  const stepTwo = (
    profile?.isProfileComplete && !profile.isApprovalPending &&
    <SelectCohort {...profileProps} />
  )

  // Step 3: Profile has been added to waitlist. User awaits approval. 
  const stepThree = (
    profile?.isApprovalPending &&
    <>
      <h1>Awaiting instructor approval.</h1>
      <p>Feel free to make any changes to your profile or select a different cohort.</p>
      <SelectCohort {...profileProps} />
      <ProfileForm {...profileProps} />
    </>
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

// MyProfile needs to be a component that can fit inside
// whatever Message component wrapper we use for step 3

// User has access to the site once an instructor has made them a student
// and isOnboarded is set to true. cohorts.approveProfile
// Update cohort.approveProfile controller with isOnboarded

// Allow a user to go back to edit profile or select a different cohort?
// Or just allow them to access the ProfileForm and SelectCohort components after completion
// Should probably give them access to a dashboard page or some kind of redirect
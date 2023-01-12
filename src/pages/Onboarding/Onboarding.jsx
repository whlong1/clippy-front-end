// Components
import ProfileForm from "./components/ProfileForm"
import SelectCohort from './components/SelectCohort'

const Onboarding = (props) => {
  const { profile, setProfile } = props
  const profileProps = { profile, setProfile }

  // Onboarding Stages

  // Step 1: Profile is incomplete. User completes profile.
  const stepOne = (
    profile && !profile.isProfileComplete &&
    <>
      <h2>Complete your profile</h2>
      <ProfileForm {...profileProps} />
    </>
  )

  // Step 2: Profile has been completed. User selects cohort.
  const stepTwo = (
    profile?.isProfileComplete && !profile.isApprovalPending &&
    <>
      <h2>Select the cohort you want to join</h2>
      <SelectCohort {...profileProps} />
    </>
  )

  // Step 3: Profile has been added to waitlist. User awaits approval. 
  const stepThree = (
    profile?.isApprovalPending &&
    <>
      <h2>Awaiting instructor approval.</h2>
      <p>After being admitted into a cohort, you'll need to refresh your browser.</p>
      <p>Feel free to make any changes to your profile or select a different cohort.</p>
      <SelectCohort {...profileProps} />
      <ProfileForm {...profileProps} />
    </>
  )

  return (
    <main className="page">
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
// Allow a user to go back to edit profile or select a different cohort?
// Or just allow them to access the ProfileForm and SelectCohort components after completion
// Should probably give them access to a dashboard page or some kind of redirect
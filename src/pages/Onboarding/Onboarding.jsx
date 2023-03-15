// Components
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import JoinCohort from '../../components/JoinCohort/JoinCohort'

// Styles
import './Onboarding.css'

const Onboarding = (props) => {
  const { profile, setProfile } = props
  const profileProps = { profile, setProfile }

  const isStepOne = profile && !profile.isProfileComplete
  const isStepTwo = profile?.isProfileComplete && !profile.isApprovalPending
  const isStepThree = profile?.isApprovalPending

  // Onboarding Stages

  // Step 1: Profile is incomplete. User completes profile.
  const stepOne = (
    isStepOne &&
    <>
      <h2>Please enter your profile information below</h2>
      <ProfileForm {...profileProps} />
    </>
  )

  // Step 2: Profile has been completed. User selects cohort.
  const stepTwo = (
    isStepTwo &&
    <>
      <h2>Select the cohort you want to join</h2>
      <JoinCohort {...profileProps} />
    </>
  )

  // Step 3: Profile has been added to waitlist. User awaits approval. 
  const stepThree = (
    isStepThree &&
    <>
      <h2>Awaiting instructor approval.</h2>
      <p>After being admitted into a cohort, you'll need to refresh your browser.</p>
      <p>Feel free to make any changes to your profile or select a different cohort.</p>
      <JoinCohort {...profileProps} />
      <ProfileForm {...profileProps} />
    </>
  )

  return (
    <main className="onboarding">
      <section>
        <header>
          <h1>Onboarding</h1>
          {isStepOne && <p>Step 1</p>}
          {isStepTwo && <p>Step 2</p>}
          {isStepThree && <p>Step 3</p>}
        </header>
        {stepOne}
        {stepTwo}
        {stepThree}
      </section>
    </main>
  )
}

export default Onboarding
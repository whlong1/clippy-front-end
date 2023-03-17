import { useState, useEffect } from "react"

// Components
import Popup from '../../layouts/Popup.jsx'
import CohortForm from "../../features/Admin/CohortForm.jsx"
import JoinCohort from '../../components/JoinCohort/JoinCohort'
import ProfileForm from "../../components/ProfileForm/ProfileForm"


// Services
import * as cohortService from '../../services/cohortService'

// Styles
import './Onboarding.css'

const Onboarding = (props) => {
  const { user, profile, setProfile } = props
  const profileProps = { profile, setProfile }

  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isNewWorkspace, setIsNewWorkspace] = useState(false)

  const isStepOne = profile && !profile.isProfileComplete
  const isStepTwo = profile?.isProfileComplete && !profile.isApprovalPending
  const isStepThree = profile?.isApprovalPending

  console.log(user, profile)

  useEffect(() => {
    const fetchCohorts = async () => {
      const res = await cohortService.indexCohorts()
      if (!res.length) setIsNewWorkspace(true)
    }
    fetchCohorts()
  }, [])


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
      {isNewWorkspace
        ?
        <section className="adminOnboard">
          <h2>Create a new cohort</h2>
          <CohortForm />
        </section>
        :
        <section>
          <h2>Select the cohort you wish to join</h2>
          <JoinCohort {...profileProps} />
        </section>
      }
    </>
  )

  // Step 3: Profile has been added to waitlist. User awaits approval. 
  const stepThree = (
    isStepThree &&
    <>
      <h2>Awaiting instructor approval.</h2>

      <div className="message">
        <p>After being admitted into a cohort, you'll need to refresh your browser.</p>
        <p>Feel free to make any changes to your profile or select a different cohort.</p>
      </div>

      <div className="options" >
        <button onClick={() => setIsEditOpen(true)}>EDIT PROFILE</button>
        <button onClick={() => setIsJoinOpen(true)}>SELECT NEW COHORT</button>
      </div>

      <section>
        <Popup isOpen={isJoinOpen}>
          <section className="shell">
            <header>
              <h1>Select A Cohort</h1>
              <button onClick={() => setIsJoinOpen(false)}>CANCEL</button>
            </header>
            <h2>Select the cohort you wish to join</h2>
            <JoinCohort {...profileProps} setIsJoinOpen={setIsJoinOpen} />
          </section>
        </Popup>
        <Popup isOpen={isEditOpen}>
          <section className="shell">
            <header>
              <h1>Edit Profile</h1>
              <button onClick={() => setIsEditOpen(false)}>CANCEL</button>
            </header>
            <h2>Please enter your profile information below</h2>
            <ProfileForm {...profileProps} setIsEditOpen={setIsEditOpen} />
          </section>
        </Popup>
      </section>
    </>
  )

  return (
    <main className="onboarding" style={{ position: 'relative' }}>
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
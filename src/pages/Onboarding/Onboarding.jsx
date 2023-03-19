import { useState, useEffect } from "react"

// Components
import CohortForm from "../../features/Admin/CohortForm.jsx"
import JoinCohort from '../../components/JoinCohort/JoinCohort'
import ProfileForm from "../../components/ProfileForm/ProfileForm"
import EditProfilePopup from "../../components/EditProfilePopup/EditProfilePopup.jsx"
import SelectCohortPopup from "../../components/SelectCohortPopup/SelectCohortPopup.jsx"

// Services
import * as adminService from '../../services/adminService'
import * as cohortService from '../../services/cohortService'

// Styles
import './Onboarding.css'

const Onboarding = (props) => {
  const { user, profile, setProfile } = props
  const profileProps = { profile, setProfile }

  const [isJoinOpen, setIsJoinOpen] = useState(false)
  const [isEditOpen, setIsEditOpen] = useState(false)
  const [isNewWorkspace, setIsNewWorkspace] = useState(false)

  const createInitialCohort = async (formData) => {
    const data = { ...formData, profileId: profile._id }
    const res = await adminService.createCohortAndOnboardAdmin(data)
    res.isInitialUser = true
    res.isApprovalPending = true
    setProfile(res)
  }

  const isStepOne = profile && !profile.isProfileComplete
  const isStepTwo = profile?.isProfileComplete && !profile.isApprovalPending
  const isStepThree = profile?.isApprovalPending

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
      {isNewWorkspace && user.isAdmin
        ?
        <section className="adminOnboard">
          <h2>Create a new cohort</h2>
          <CohortForm createInitialCohort={createInitialCohort} />
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
      <h2>{profile.isInitialUser ? 'Congratulations' : 'Awaiting instructor approval.'}</h2>

      {profile.isInitialUser
        ? <div className="message">
          <p>Cohort created successfully!</p>
          <p>Please refresh your browser to start using the site.</p>
        </div>
        : <div className="message">
          <p>After being admitted into a cohort, you'll need to refresh your browser.</p>
          <p>Feel free to make any changes to your profile or select a different cohort.</p>
        </div>
      }

      {!profile.isInitialUser &&
        <div className="options" >
          <button onClick={() => setIsEditOpen(true)}>EDIT PROFILE</button>
          <button onClick={() => setIsJoinOpen(true)}>SELECT NEW COHORT</button>
        </div>
      }

      <EditProfilePopup
        profile={profile}
        isOpen={isEditOpen}
        setProfile={setProfile}
        setIsOpen={setIsEditOpen}
      />

      <SelectCohortPopup
        profile={profile}
        isOpen={isJoinOpen}
        setProfile={setProfile}
        setIsOpen={setIsJoinOpen}
      />
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
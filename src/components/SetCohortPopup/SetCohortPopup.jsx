import "./SetCohortPopup.css"

// Components
import Popup from "../../layouts/Popup"
import JoinCohort from "../../components/JoinCohort/JoinCohort"

const SetCohortPopup = ({ isJoinOpen, setIsJoinOpen, profile, setProfile }) => {
  return (
    <Popup isOpen={isJoinOpen}>
      <div className="setCohortPopup">
        <header>
          <h1>Set Default Cohort</h1>
          <p>After joining, you will need to admit yourself to the cohort.</p>
          <p>Be sure to refresh your browser to update the default cohort selection.</p>
        </header>
        <JoinCohort
          profile={profile}
          setProfile={setProfile}
          setIsJoinOpen={setIsJoinOpen}
        />
        <button onClick={() => setIsJoinOpen(false)}>CANCEL</button>
      </div>
    </Popup>
  )
}

export default SetCohortPopup
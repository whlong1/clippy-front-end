import "./SelectCohortPopup.css"

// Components
import Popup from "../../layouts/Popup"
import JoinCohort from "../JoinCohort/JoinCohort"

const SelectCohortPopup = ({ isOpen, setIsOpen, profile, setProfile, notifyAdmin }) => {

  const generalMsg = "After joining, please wait while an administrator approves you."
  const adminMsg = "Please note, joining a new cohort will update the default cohort you see upon logging in."

  return (
    <Popup isOpen={isOpen}>
      <div className="selectCohortPopup">
        <header>
          <h1>Select A Cohort</h1>
          {notifyAdmin ? <p>{adminMsg}</p> : <p>{generalMsg}</p>}
        </header>
        <JoinCohort
          profile={profile}
          setIsOpen={setIsOpen}
          setProfile={setProfile}
        />
        <button onClick={() => setIsOpen(false)}>CANCEL</button>
      </div>
    </Popup>
  )
}

export default SelectCohortPopup
import "./SelectCohortPopup.css"

// Components
import Popup from "../../layouts/Popup"
import JoinCohort from "../JoinCohort/JoinCohort"

const SelectCohortPopup = ({ isOpen, setIsOpen, profile, setProfile }) => {
  return (
    <Popup isOpen={isOpen}>
      <div className="selectCohortPopup">
        <header>
          <h1>Select A Cohort</h1>
          <p>After joining, please wait while an administrator approves you.</p>
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
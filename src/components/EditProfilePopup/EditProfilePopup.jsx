import "./EditProfilePopup.css"

// Components
import Popup from "../../layouts/Popup"
import ProfileForm from "../../components/ProfileForm/ProfileForm"

const EditProfilePopup = ({ isOpen, setIsOpen, profile, setProfile }) => {
  return (
    <Popup isOpen={isOpen}>
      <div className="editProfile">
        <header>
          <h1>Edit Profile</h1>
        </header>
        <section>
          <ProfileForm
            profile={profile}
            setIsOpen={setIsOpen}
            setProfile={setProfile}
          />
          <button onClick={() => setIsOpen(false)}>CANCEL</button>
        </section>
      </div>
    </Popup>
  )
}

export default EditProfilePopup
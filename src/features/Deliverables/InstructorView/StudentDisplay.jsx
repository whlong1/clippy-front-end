// Assets
import studentIcon from '../../../assets/icons/headers/student.svg'

// Components
import ProfileInfo from '../../../components/ProfileInfo/ProfileInfo'

const StudentDisplay = ({ profile }) => {
  return (
    <div className="subheader">
      <h3>
        <img src={studentIcon} alt="student" />
        Student
      </h3>
      <ProfileInfo profile={profile} />
    </div>
  )
}

export default StudentDisplay
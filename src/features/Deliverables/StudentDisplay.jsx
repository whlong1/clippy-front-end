import ProfileInfo from '../../components/ProfileInfo/ProfileInfo'

const StudentDisplay = ({ profile }) => {
  return (
    <div>
      <h3>Student</h3>
      <ProfileInfo profile={profile} />
    </div>
  )
}

export default StudentDisplay
// Components
import AttendanceChart from "../AttendanceChart/AttendanceChart"
import DeliverableChart from "../DeliverableChart/DeliverableChart"

const StudentChartColumn = ({ user, profile, cohortId }) => {
  return (
    !user.isAdmin &&
    <div className="chartColumn">
      <DeliverableChart profile={profile} cohortId={cohortId} />
      <AttendanceChart profile={profile} cohortId={cohortId} />
    </div>
  )
}

export default StudentChartColumn
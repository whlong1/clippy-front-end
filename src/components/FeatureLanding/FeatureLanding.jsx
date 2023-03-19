import "./FeatureLanding.css"

// Assets
import AttendanceIcon from "../../assets/icons/nav/attendance.svg"
import PeopleIcon from "../../assets/icons/nav/people.svg"
import CompletionIcon from "../../assets/icons/headers/completion.svg"
import AdminIcon from "../../assets/icons/nav/admin.svg"
import DeliverablesIcon from "../../assets/icons/nav/deliverables.svg"

const FeatureLanding = ({ title }) => {

  const getIcon = () => {
    switch (title) {
      case "People":
        return PeopleIcon
      case "Admin":
        return AdminIcon
      case "Attendance":
      case "My Attendance":
        return AttendanceIcon
      case "Deliverables":
      case "My Deliverables":
        return DeliverablesIcon
      default:
        return CompletionIcon
    }
  }

  return (
    <section className="featureLanding">
      <div>
        <img src={getIcon()} alt={title} />
        <h1>{title}</h1>
      </div>
    </section>
  )
}

export default FeatureLanding
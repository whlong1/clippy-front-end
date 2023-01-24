import { Link } from "react-router-dom"

// Components
import ExternalUrls from "./ExternalUrls"
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo"

import Select from 'react-select'


const StudentDeliverableRow = ({ deliverableId, student }) => {
  const { _id: studentDeliverableId } = student
  const path = `/deliverables/${deliverableId}/students/${studentDeliverableId}/grade`

  console.log(student)

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  return (
    <div>
      <Link to={path}>
        <p>Status: {student.status}</p>
        <ProfileInfo profile={student} />
        <p>{student.preferredName}</p>
        <p>{student.lastName}</p>
      </Link>

      <Select
        options={options}
        styles={{
          control: (baseStyles, state) => ({
            ...baseStyles,
            borderColor: 'red',
            height: '20px',
          }),
        }}
      />

      External link:
      <ExternalUrls student={student} />

    </div>
  )
}

export default StudentDeliverableRow 
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
    { value: 'red', label: 'Red' },
    { value: 'blue', label: 'Blue' },
    { value: 'green', label: 'Green' },
  ]

  const colourStyles = {
    option: (styles, { data }) => {
      const color = data.value;
      return {
        ...styles,
        backgroundColor: color,
        color: 'white',
      };
    },
    control: (styles, data) => {
      console.log('Selected', data.selectedOption)
      // const color = data.value;
      return {
        ...styles,
        backgroundColor: 'red',
        color: 'white',
      };
    },
  };

  const handleChange = (selectedOption) => {
    console.log('option', selectedOption)
  }

  return (
    <div className="row">
      <Link to={path}>
        <p>Status: {student.status}</p>
        <ProfileInfo profile={student} />
        <p>{student.preferredName}</p>
        <p>{student.lastName}</p>
      </Link>

      <Select
        onChange={handleChange}
        options={options}
        styles={colourStyles}
        defaultValue={options[0]}
      />


      External link:
      <ExternalUrls student={student} />

    </div>
  )
}

export default StudentDeliverableRow 
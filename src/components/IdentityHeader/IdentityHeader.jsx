import "./IdentityHeader.css"

// If the IdentityHeader is used in ShowPerson, we display the current role,
// as this is relevant to a given cohort. If the header is used in MyProfile,
// no role is displayed, as this is dependent on the selected cohort.

const IdentityHeader = ({ person, textAlign, displayRole }) => {

  const textAlignment = { textAlign: textAlign }
  const conditionalMargin = displayRole ? {} : { marginTop: '32px' }

  const roleLookup = {
    ias: 'IA',
    tas: 'TA',
    students: 'Student',
    waitlist: 'Waitlist',
    inactive: 'Inactive',
    instructors: 'Instructor',
  }

  const last = person.lastName[0].toUpperCase() + person.lastName.slice(1)
  const first = person.preferredName[0].toUpperCase() + person.preferredName.slice(1)
  const fullName = first + " " + last

  return (
    <header className="identityHeader">
      {displayRole && <h3 style={textAlignment}>{roleLookup[person.role]}</h3>}
      <h1 style={{ ...textAlignment, ...conditionalMargin }}>{fullName}</h1>
      <p style={textAlignment}>{person.preferredPronouns}</p>
    </header>
  )
}

export default IdentityHeader
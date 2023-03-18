import "./IdentityHeader.css"

const IdentityHeader = ({ person, textAlign }) => {

  const textAlignment = { textAlign: textAlign }

  const formattedRole = !person.role ? 'Pending' : person.role[person.role.length - 1] === 's'
    ? person.role[0].toUpperCase() + person.role.slice(1, -1)
    : person.role[0].toUpperCase() + person.role.slice(1)

  const last = person.lastName[0].toUpperCase() + person.lastName.slice(1)
  const first = person.preferredName[0].toUpperCase() + person.preferredName.slice(1)
  const fullName = first + " " + last

  return (
    <header className="identityHeader">
      <h3 style={textAlignment}>{formattedRole}</h3>
      <h1 style={textAlignment}>{fullName}</h1>
      <p style={textAlignment}>{person.preferredPronouns}</p>
    </header>
  )
}

export default IdentityHeader
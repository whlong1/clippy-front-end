const PeopleList = (props) => {
  const { role, people } = props
  return (
    <>
      <h3>{role}</h3>
      <p>{people.length}</p>
      {people.map((p) => (
        <p key={p._id}>{p.name}</p>
      ))}
    </>
  )
}

export default PeopleList
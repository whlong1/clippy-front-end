const AttendanceHeader = (props) => {
  const {
    user,
    isOpen,
    setIsOpen,
    attendance,
    formattedDate,
    handleRedirect,
  } = props

  return (
    <header className='header'>
      <section>
        <h1>{formattedDate} {attendance.time}</h1>
        {user.isAdmin && <button onClick={handleRedirect}>Edit</button>}
        {user.isAdmin && <button onClick={() => setIsOpen(!isOpen)}>Delete</button>}
      </section>
      <section>
        <div>
          <h3>Taken By</h3>
          <p>{attendance.takenBy.slice(0, 20)}</p>
        </div>
      </section>
    </header>
  )
}

export default AttendanceHeader
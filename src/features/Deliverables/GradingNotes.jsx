const GradingNotes = ({ gradingNotes, handleChange }) => {
  return (
    <textarea
      name="gradingNotes"
      value={gradingNotes}
      onChange={handleChange}
    />
  )
}

export default GradingNotes
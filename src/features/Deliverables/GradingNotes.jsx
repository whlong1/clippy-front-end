const GradingNotes = ({ gradingNotes, handleChange }) => {
  return (
    <section>
      <h2>Grading Notes</h2>
      <textarea
        name="gradingNotes"
        value={gradingNotes}
        onChange={handleChange}
      />
    </section>
  )
}

export default GradingNotes